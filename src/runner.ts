import dotenv from 'dotenv';
import tests from './tests/definitions.ts';
import { send } from './helpers/httpClient.ts';
import { runAssertions } from './helpers/assertions.ts';
import { replacePlaceholders } from './helpers/fixtures.ts';
import { ensureCommonFixtures } from './helpers/autoIds.ts';

dotenv.config();

async function run() {
  const autoIdsEnabled = process.env.AUTO_IDS !== '0' && process.env.MOCK !== '1';
  if (autoIdsEnabled) {
    try {
      await ensureCommonFixtures();
    } catch (err: any) {
      console.warn(`Warning: auto ID collection failed: ${err.message}`);
    }
  }

  let selected = tests;
  const filter = process.env.TEST_FILTER;

  if (filter) {
    selected = tests.filter((t: any) => t.name.toLowerCase().includes(filter.toLowerCase()));
  }

  if (!Array.isArray(selected) || selected.length === 0) {
    console.log('No tests defined.');
    return;
  }

  let passed = 0;
  let failed = 0;

  for (const test of selected) {
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
      const assertionResults = runAssertions(response.data, test.assertions || []);
      const failures = assertionResults.filter((r: any) => !r.ok);

      if (failures.length === 0) {
        passed += 1;
        console.log('  ✅ Passed');
      } else {
        failed += 1;
        console.log(`  ❌ Failed (${failures.length} issue${failures.length > 1 ? 's' : ''})`);
        failures.forEach((f: any) => {
          console.log(`    - ${f.error} (value: ${JSON.stringify(f.value)})`);
        });
      }
    } catch (err: any) {
      failed += 1;
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
