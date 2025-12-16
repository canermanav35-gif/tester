export const leavesMock = {
  status: 200,
  headers: {},
  data: {
    success: true,
    data: [
      {
        id: '11111111-2222-4333-8444-555555555555',
        staff: { id: 'aaaa1111-2222-3333-4444-555555555555' },
        department: { id: 'depa-depa-depa-depa-depaaaaaaa' },
        type: 'ANNUAL_LEAVE',
        start_date: '2025-12-10T21:00:00.000Z',
        end_date: '2025-12-11T21:00:00.000Z',
        number_of_days: 2,
        response_note: null,
        status: 1,
        created_at: '2025-12-10T15:00:00.000Z',
        updated_at: '2025-12-10T15:05:00.000Z',
        note: null,
        approval_document: null,
        substitute: null,
      },
      {
        id: '66666666-7777-4888-8888-000000000000',
        staff: { id: 'bbbb1111-2222-3333-4444-555555555555' },
        department: { id: 'depb-depb-depb-depb-depbbbbbbb' },
        type: 'COMPASSIONATE_LEAVE',
        start_date: '2025-12-20T21:00:00.000Z',
        end_date: '2025-12-22T21:00:00.000Z',
        number_of_days: 3,
        response_note: 'Mock note',
        status: 0,
        created_at: '2025-12-12T10:00:00.000Z',
        updated_at: '2025-12-12T10:00:00.000Z',
        note: null,
        approval_document: null,
        substitute: null,
      },
    ],
    count: 7,
    message: 'Mocked leave list',
    status: 200,
  },
};

export const leaveMocks = {
  'GET /api/leaves': leavesMock,
};
