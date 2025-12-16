import { send } from './httpClient.ts';
import { setFixture } from './fixtures.ts';

const DEFAULT_STAFF_QUERY = '/api/staff';

// Pick first active staff from staff list
async function pickStaffId() {
  const res = await send({ method: 'GET', url: DEFAULT_STAFF_QUERY, user: 'admin' });
  const list = res?.data?.data || [];
  const active = list.filter((s: any) => s.status === 1 || s.status === 0);
  const chosen = active[0] || list[0];
  if (chosen?.id) {
    setFixture('staff_id', chosen.id);
    return chosen.id;
  }
  throw new Error('No staff found to use for leave request');
}

function futureDate(offsetDays = 7, hours = 9) {
  const date = new Date();
  date.setUTCDate(date.getUTCDate() + offsetDays);
  date.setUTCHours(hours, 0, 0, 0);
  return date.toISOString();
}

export async function prepareLeaveRequest(test: any) {
  const staffID = test.data?.staffID || (await pickStaffId());

  let start = futureDate(7, 9);
  let end = futureDate(8, 18);

  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      return {
        ...test,
        data: {
          ...test.data,
          staffID,
          start_date: start,
          end_date: end,
        },
      };
    } catch (err) {
      if (attempt === 2) throw err;
      start = futureDate(9 + attempt, 9);
      end = futureDate(10 + attempt, 18);
    }
  }
  return test;
}
