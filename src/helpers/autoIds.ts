import { send } from './httpClient.ts';
import { getFixtures, setFixture } from './fixtures.ts';

async function ensure(key: string, fetcher: () => Promise<string | undefined>) {
  const fixtures = getFixtures();
  if (fixtures[key]) return fixtures[key];
  const value = await fetcher();
  if (value) {
    setFixture(key, value);
    return value;
  }
  throw new Error(`Unable to resolve fixture for ${key}`);
}

function firstId(list: any[] = []) {
  return list?.[0]?.id as string | undefined;
}

export async function ensureCommonFixtures() {
  await ensure('staff_id', async () => {
    const res = await send({ method: 'GET', url: '/api/staff', user: 'admin' });
    const list = res?.data?.data || [];
    const active = list.find((s: any) => s.status === 1 || s.status === 0) || list[0];
    const fallback = list.find((s: any) => s.id !== active?.id);
    if (fallback?.id) setFixture('substitute_id', fallback.id);
    return active?.id;
  });

  await ensure('department_id', async () => {
    const res = await send({ method: 'GET', url: '/api/departments', user: 'admin' });
    return firstId(res?.data?.data);
  });

  await ensure('project_id', async () => {
    const res = await send({ method: 'GET', url: '/api/staff-portal/projects', user: 'staff' });
    return firstId(res?.data?.data);
  });

  await ensure('assignment_id', async () => {
    const res = await send({ method: 'GET', url: '/api/staff-portal/assignments', user: 'staff' });
    return firstId(res?.data?.data);
  });

  await ensure('entrust_id', async () => {
    const res = await send({ method: 'GET', url: '/api/staff-portal/entrust', user: 'staff' });
    return firstId(res?.data?.data);
  });

  await ensure('expense_group_id', async () => {
    const res = await send({ method: 'GET', url: '/api/staff-portal/expenses', user: 'staff' });
    return firstId(res?.data?.data);
  });

  await ensure('file_id', async () => {
    const res = await send({ method: 'GET', url: '/api/files', user: 'admin' });
    return firstId(res?.data?.data);
  });

  await ensure('payroll_id', async () => {
    const res = await send({ method: 'GET', url: '/api/staff-portal/payrolls', user: 'staff' });
    return firstId(res?.data?.data);
  });
}
