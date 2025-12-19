import dotenv from 'dotenv';
import tests, {} from './tests/definitions.js';
import { send } from './helpers/httpClient.js';
import { runAssertions } from './helpers/assertions.js';
import { replacePlaceholders, captureFixturesFrom, captureAllIds } from './helpers/fixtures.js';
import { ensureCommonFixtures } from './helpers/autoIds.js';
dotenv.config();
async function run() {
    const autoIdsEnabled = process.env.AUTO_IDS !== '0' && process.env.MOCK !== '1';
    if (autoIdsEnabled) {
        try {
            await ensureCommonFixtures();
        }
        catch (err) {
            console.warn(`Warning: auto ID collection failed: ${err.message}`);
        }
    }
    let selected = tests;
    const filter = process.env.TEST_FILTER;
    if (filter) {
        selected = tests.filter((t) => t.name.toLowerCase().includes(filter.toLowerCase()));
    }
    if (!Array.isArray(selected) || selected.length === 0) {
        console.log('No tests defined.');
        return;
    }
    let passed = 0;
    let failed = 0;
    const resultsByMethod = new Map();
    const trackResult = (method, status, name, reason) => {
        const key = method.toUpperCase();
        if (!resultsByMethod.has(key)) {
            resultsByMethod.set(key, { passed: [], failed: [] });
        }
        const entry = resultsByMethod.get(key);
        if (status === 'passed') {
            entry.passed.push(name);
        }
        else {
            entry.failed.push({ name, reason: reason || '' });
        }
    };
    const ordered = [
        ...selected.filter((t) => (t.method || 'GET').toUpperCase() === 'GET'),
        ...selected.filter((t) => (t.method || 'GET').toUpperCase() !== 'GET'),
    ];
    for (const test of ordered) {
        const method = (test.method || 'GET').toUpperCase();
        console.log(`\n▶︎ ${test.name}`);
        try {
            const prepared = test.prepare ? await test.prepare(test) : test;
            const request = {
                ...test,
                ...prepared,
                url: replacePlaceholders(prepared.url || test.url),
                headers: replacePlaceholders(prepared.headers || test.headers),
                params: replacePlaceholders(prepared.params || test.params),
                data: replacePlaceholders(prepared.data || test.data),
            };
            const response = await send(request);
            if (method === 'GET') {
                captureAllIds(response.data);
            }
            captureFixturesFrom(response.data, test.captures);
            const assertionResults = runAssertions(response.data, test.assertions || []);
            const failures = assertionResults.filter((r) => !r.ok);
            if (failures.length === 0) {
                passed += 1;
                trackResult(method, 'passed', test.name);
                console.log('  ✅ Passed');
            }
            else {
                failed += 1;
                const reason = failures.map((f) => f.error).join('; ');
                trackResult(method, 'failed', test.name, reason);
                console.log(`  ❌ Failed (${failures.length} issue${failures.length > 1 ? 's' : ''})`);
                failures.forEach((f) => {
                    console.log(`    - ${f.error} (value: ${JSON.stringify(f.value)})`);
                });
            }
        }
        catch (err) {
            failed += 1;
            trackResult(method, 'failed', test.name, err && err.message ? err.message : String(err));
            console.log('  ❌ Error during execution');
            console.log(`    - ${err && err.message ? err.message : err}`);
        }
    }
    const total = passed + failed;
    console.log('\nSummary');
    console.log(`  Total: ${total}`);
    console.log(`  Passed: ${passed}`);
    console.log(`  Failed: ${failed}`);
    if (failed > 0) {
        process.exitCode = 1;
    }
}
run();
//# sourceMappingURL=runner.js.map