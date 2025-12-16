import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const defaultPath = path.resolve(process.cwd(), 'fixtures', 'ids.json');

let cachedFixtures: Record<string, any> | null = null;

function loadFromFile(filePath = defaultPath) {
  try {
    if (cachedFixtures) return cachedFixtures;
    if (!fs.existsSync(filePath)) return {};
    const raw = fs.readFileSync(filePath, 'utf8');
    const parsed = JSON.parse(raw);
    cachedFixtures = parsed || {};
    return cachedFixtures;
  } catch (err: any) {
    console.warn(`Failed to load fixtures from ${filePath}: ${err.message}`);
    return {};
  }
}

export function getFixtures() {
  return loadFromFile(process.env.FIXTURES_PATH || defaultPath);
}

export function setFixture(key: string, value: any) {
  const filePath = process.env.FIXTURES_PATH || defaultPath;
  const fixtures = loadFromFile(filePath);
  fixtures[key] = value;
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(fixtures, null, 2), 'utf8');
  cachedFixtures = fixtures;
}

export function replacePlaceholders(value: any) {
  const fixtures = getFixtures();
  const replacer = (val: any) => {
    if (typeof val !== 'string') return val;
    return val.replace(/\{\{([^}]+)\}\}/g, (_: string, key: string) => {
      const trimmed = key.trim();
      return fixtures[trimmed] !== undefined ? fixtures[trimmed] : '';
    });
  };

  const walk = (val: any): any => {
    if (Array.isArray(val)) return val.map(walk);
    if (val && typeof val === 'object') {
      return Object.fromEntries(Object.entries(val).map(([k, v]) => [k, walk(v)]));
    }
    return replacer(val);
  };

  return walk(value);
}

// Heuristic UUID matcher
const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const pathToFixture = [
  { prefix: '/api/departments/', key: 'department_id' },
  { prefix: '/api/staff-portal/projects/', key: 'project_id' },
  { prefix: '/api/staff-portal/assignments/', key: 'assignment_id' },
  { prefix: '/api/staff-portal/entrust/', key: 'entrust_id' },
  { prefix: '/api/staff-portal/payrolls/', key: 'payroll_id' },
  { prefix: '/api/files/', key: 'file_id' },
  { prefix: '/api/staff/', key: 'staff_id' },
];

function swapPathId(url: string, fixtures: Record<string, any>) {
  let result = url;
  pathToFixture.forEach(({ prefix, key }) => {
    if (result.startsWith(prefix) && fixtures[key]) {
      const after = result.slice(prefix.length);
      const segment = after.split(/[/?]/)[0];
      // Only swap when the existing segment looks like a UUID to avoid replacing words like "upload"
      if (uuidRegex.test(segment)) {
        const replaced = after.replace(/^[^/?]+/, fixtures[key]);
        result = prefix + replaced;
      }
    }
  });
  return result;
}

export function normalizeWithFixtures({ url, data, params }: { url: string; data?: any; params?: any }) {
  const fixtures = getFixtures();
  const finalUrl = swapPathId(url, fixtures);

  const rewriteByKey = (val: any, keyName: string) => {
    const lower = keyName.toLowerCase();
    const mapping = [
      { needle: 'staffid', key: 'staff_id' },
      { needle: 'substituteid', key: 'substitute_id' },
      { needle: 'departmentid', key: 'department_id' },
      { needle: 'assignmentid', key: 'assignment_id' },
      { needle: 'entrustid', key: 'entrust_id' },
      { needle: 'projectid', key: 'project_id' },
      { needle: 'fileid', key: 'file_id' },
      { needle: 'payrollid', key: 'payroll_id' },
      { needle: 'groupid', key: 'group_id' },
      { needle: 'expensegroupid', key: 'expense_group_id' },
    ];
    const hit = mapping.find((m) => lower.includes(m.needle) && fixtures[m.key]);
    if (hit) return fixtures[hit.key];
    return val;
  };

  const walk = (val: any, keyName = ''): any => {
    if (Array.isArray(val)) return val.map((v) => walk(v, keyName));
    if (val && typeof val === 'object') {
      return Object.fromEntries(
        Object.entries(val).map(([k, v]) => [k, walk(rewriteByKey(v, k), k)])
      );
    }
    if (typeof val === 'string' && uuidRegex.test(val)) {
      return rewriteByKey(val, keyName);
    }
    return rewriteByKey(val, keyName);
  };

  return {
    url: finalUrl,
    data: walk(data),
    params: walk(params),
  };
}
