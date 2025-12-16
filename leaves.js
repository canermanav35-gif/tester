// Example generated test object for leaves listing
const leavesTest = {
  name: 'Leaves list basic validation',
  user: 'admin',
  method: 'GET',
  url: '/api/leaves',
  assertions: [
    { path: 'success', type: 'equals', expected: true, message: 'success must be true' },
    { path: 'data', type: 'exists', message: 'data array must exist' },
    { path: 'data.0.staff.id', type: 'notNull', message: 'staff.id must not be null' },
    { path: 'data.0.status', type: 'in', expected: [0, 1, 2], message: 'status must be in [0,1,2]' },
    { path: 'count', type: 'equals', expected: 7, message: 'count must be 7' },
  ],
};

export default leavesTest;
