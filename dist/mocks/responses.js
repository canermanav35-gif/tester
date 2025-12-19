import { departmentMocks } from './departments.js';
import { leaveMocks } from './leaves.js';
import { staffPortalMocks } from './staffPortal.js';
import { filesMocks } from './files.js';
import { staffMocks } from './staff.js';
import { locationMocks } from './locations.js';
// Merge all mocks; keys are "METHOD /path"
export const mockResponses = {
    ...leaveMocks,
    ...departmentMocks,
    ...staffPortalMocks,
    ...filesMocks,
    ...staffMocks,
    ...locationMocks,
};
export function getMockResponse(method, url) {
    const key = `${method.toUpperCase()} ${url}`;
    return mockResponses[key];
}
//# sourceMappingURL=responses.js.map