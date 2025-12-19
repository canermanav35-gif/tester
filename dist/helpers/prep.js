import { send } from './httpClient.js';
import { getFixtures, setFixture } from './fixtures.js';
const DEFAULT_STAFF_QUERY = '/api/staff';
// Pick first active staff from staff list
async function pickStaffId() {
    const res = await send({ method: 'GET', url: DEFAULT_STAFF_QUERY, user: 'admin' });
    const list = res?.data?.data || [];
    const active = list.filter((s) => s.status === 1 || s.status === 0);
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
function uniqueName(prefix = 'Auto Location') {
    const stamp = new Date().toISOString().replace(/[-:.TZ]/g, '').slice(0, 14);
    const rnd = Math.random().toString(36).slice(2, 7);
    return `${prefix} ${stamp}-${rnd}`;
}
async function getStaffPair() {
    const fixtures = getFixtures();
    const cachedStaff = fixtures.staff_id;
    const cachedSub = fixtures.substitute_id;
    if (cachedStaff && cachedSub) {
        return { staffID: cachedStaff, substituteID: cachedSub };
    }
    const res = await send({ method: 'GET', url: DEFAULT_STAFF_QUERY, user: 'admin' });
    const list = res?.data?.data || [];
    const active = list.filter((s) => s.status === 1 || s.status === 0);
    const primary = active[0] || list[0];
    const secondary = active.find((s) => s.id !== primary?.id) || list.find((s) => s.id !== primary?.id);
    if (!primary?.id || !secondary?.id) {
        throw new Error('Could not find two distinct staff members for leave request');
    }
    setFixture('staff_id', primary.id);
    setFixture('substitute_id', secondary.id);
    return { staffID: primary.id, substituteID: secondary.id };
}
export async function prepareLeaveRequest(test) {
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
        }
        catch (err) {
            if (attempt === 2)
                throw err;
            start = futureDate(9 + attempt, 9);
            end = futureDate(10 + attempt, 18);
        }
    }
    return test;
}
export async function prepareAdminLeaveCreate(test) {
    const { staffID, substituteID } = await getStaffPair();
    const start = futureDate(3, 9);
    const end = futureDate(5, 18);
    return {
        ...test,
        data: {
            ...test.data,
            staffID,
            substituteID,
            start_date: start,
            end_date: end,
            type: test.data?.type || 'ANNUAL_LEAVE',
            note: test.data?.note || 'Automated leave request',
            document: test.data?.document || '@fixtures/dummy.png',
        },
    };
}
export async function prepareLeaveUpdate(test) {
    const { staffID, substituteID } = await getStaffPair();
    const start = futureDate(2, 9);
    const end = futureDate(3, 18);
    return {
        ...test,
        data: {
            ...test.data,
            staffID: test.data?.staffID || staffID,
            substituteID: test.data?.substituteID || substituteID,
            start_date: test.data?.start_date || start,
            end_date: test.data?.end_date || end,
            type: test.data?.type || 'ANNUAL_LEAVE',
            note: test.data?.note || 'Automated leave update',
            document: test.data?.document || '@fixtures/dummy.png',
        },
    };
}
export async function prepareLeaveDelete(test) {
    const fixtures = getFixtures();
    if (fixtures.leave_id) {
        return { ...test, url: test.url.replace('{{leave_id}}', fixtures.leave_id) };
    }
    const res = await send({ method: 'GET', url: '/api/leaves', user: 'admin' });
    const id = res?.data?.data?.[0]?.id;
    if (!id) {
        throw new Error('No leave id found to delete');
    }
    setFixture('leave_id', id);
    return { ...test, url: test.url.replace('{{leave_id}}', id) };
}
export function prepareLocationCreate(test) {
    const name = test.data?.name && test.data.name.trim() ? test.data.name : uniqueName();
    const rooms = Array.isArray(test.data?.rooms) && test.data.rooms.length > 0
        ? test.data.rooms
        : [{ name: 'Conference Room A' }, { name: 'Meeting Room B' }];
    return {
        ...test,
        data: {
            ...test.data,
            name,
            rooms,
            comments: test.data?.comments || 'Automated location create',
            status: test.data?.status ?? 1,
        },
    };
}
export async function prepareLocationDetail(test) {
    const fixtures = getFixtures();
    if (fixtures.location_id) {
        return { ...test, url: test.url.replace('{{location_id}}', fixtures.location_id) };
    }
    const res = await send({ method: 'GET', url: '/api/locations', user: 'admin' });
    const id = res?.data?.data?.[0]?.id;
    if (!id) {
        throw new Error('No location id found to use');
    }
    setFixture('location_id', id);
    return { ...test, url: test.url.replace('{{location_id}}', id) };
}
export async function prepareLocationUpdate(test) {
    const fixtures = getFixtures();
    let locationId = fixtures.location_id;
    if (!locationId) {
        const res = await send({ method: 'GET', url: '/api/locations', user: 'admin' });
        locationId = res?.data?.data?.[0]?.id;
        if (!locationId)
            throw new Error('No location id found to update');
        setFixture('location_id', locationId);
    }
    const name = test.data?.name && test.data.name.trim() ? test.data.name : uniqueName('Updated Location');
    const { rooms, ...rest } = test.data || {};
    return {
        ...test,
        url: test.url.replace('{{location_id}}', locationId),
        data: {
            ...rest,
            name,
            comments: rest.comments || 'Automated location update',
        },
    };
}
export async function prepareLocationDelete(test) {
    const fixtures = getFixtures();
    let locationId = fixtures.location_id;
    if (!locationId) {
        const res = await send({ method: 'GET', url: '/api/locations', user: 'admin' });
        locationId = res?.data?.data?.[0]?.id;
        if (!locationId)
            throw new Error('No location id found to delete');
        setFixture('location_id', locationId);
    }
    return { ...test, url: test.url.replace('{{location_id}}', locationId) };
}
export async function prepareLocationRooms(test) {
    const fixtures = getFixtures();
    let locationId = fixtures.location_id;
    if (!locationId) {
        const res = await send({ method: 'GET', url: '/api/locations', user: 'admin' });
        locationId = res?.data?.data?.[0]?.id;
        if (!locationId)
            throw new Error('No location id found to fetch rooms');
        setFixture('location_id', locationId);
    }
    return { ...test, url: test.url.replace('{{location_id}}', locationId) };
}
//# sourceMappingURL=prep.js.map