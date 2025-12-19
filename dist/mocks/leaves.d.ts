export namespace leavesMock {
    export let status: number;
    export let headers: {};
    export { leavesList as data };
}
export const leaveMocks: {
    'GET /api/leaves': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            message: string;
            data: ({
                id: string;
                staff: {
                    id: string;
                    first_name: string;
                    last_name: string;
                    email: string;
                };
                department: {
                    id: string;
                    name: string;
                };
                type: string;
                start_date: string;
                end_date: string;
                number_of_days: number;
                response_note: null;
                status: number;
                created_at: string;
                updated_at: string;
                note: string;
                leave_document: {
                    id: string;
                    name: string;
                    url: string;
                    category: string;
                };
                substitute: {
                    id: string;
                    first_name: string;
                    last_name: string;
                    email: string;
                };
            } | {
                id: string;
                staff: {
                    id: string;
                    first_name: string;
                    last_name: string;
                    email: string;
                };
                department: {
                    id: string;
                    name: string;
                };
                type: string;
                start_date: string;
                end_date: string;
                number_of_days: number;
                response_note: null;
                status: number;
                created_at: string;
                updated_at: string;
                note: null;
                substitute: null;
                leave_document?: never;
            })[];
            count: number;
        };
    };
    'GET /api/leaves?sortOrder=DESC': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            message: string;
            data: ({
                id: string;
                staff: {
                    id: string;
                    first_name: string;
                    last_name: string;
                    email: string;
                };
                department: {
                    id: string;
                    name: string;
                };
                type: string;
                start_date: string;
                end_date: string;
                number_of_days: number;
                response_note: null;
                status: number;
                created_at: string;
                updated_at: string;
                note: string;
                leave_document: {
                    id: string;
                    name: string;
                    url: string;
                    category: string;
                };
                substitute: {
                    id: string;
                    first_name: string;
                    last_name: string;
                    email: string;
                };
            } | {
                id: string;
                staff: {
                    id: string;
                    first_name: string;
                    last_name: string;
                    email: string;
                };
                department: {
                    id: string;
                    name: string;
                };
                type: string;
                start_date: string;
                end_date: string;
                number_of_days: number;
                response_note: null;
                status: number;
                created_at: string;
                updated_at: string;
                note: null;
                substitute: null;
                leave_document?: never;
            })[];
            count: number;
        };
    };
    'GET /api/leaves/05183e90-d06b-4f85-9068-a847a6059167': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            message: string;
            data: {
                id: string;
                staff: {
                    id: string;
                    first_name: string;
                    last_name: string;
                    email: string;
                };
                department: {
                    id: string;
                    name: string;
                };
                type: string;
                start_date: string;
                end_date: string;
                number_of_days: number;
                response_note: null;
                status: number;
                created_at: string;
                updated_at: string;
                note: string;
                leave_document: {
                    id: string;
                    name: string;
                    url: string;
                    category: string;
                };
                substitute: {
                    id: string;
                    first_name: string;
                    last_name: string;
                    email: string;
                };
            };
        };
    };
    'POST /api/leaves': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                staff: {
                    id: string;
                    first_name: string;
                    last_name: string;
                };
                substitute: {
                    id: string;
                    first_name: string;
                    last_name: string;
                };
                type: string;
                start_date: string;
                end_date: string;
                number_of_days: number;
                status: number;
                note: string;
                leave_document: {
                    id: string;
                    name: string;
                    url: string;
                    category: string;
                };
            };
        };
    };
    'PATCH /api/leaves/05183e90-d06b-4f85-9068-a847a6059167': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            message: string;
            data: {
                id: string;
                staff: {
                    id: string;
                    first_name: string;
                    last_name: string;
                    email: string;
                };
                department: {
                    id: string;
                    name: string;
                };
                type: string;
                start_date: string;
                end_date: string;
                number_of_days: number;
                response_note: string;
                status: number;
                created_at: string;
                updated_at: string;
                note: string;
                leave_document: {
                    id: string;
                    name: string;
                    url: string;
                    category: string;
                    type: string;
                };
                approval_document: {
                    id: string;
                    name: string;
                    url: string;
                    category: string;
                    type: string;
                };
                approved_by: string;
                approved_at: string;
                substitute: {
                    id: string;
                    first_name: string;
                    last_name: string;
                    email: string;
                };
            };
        };
    };
    'DELETE /api/leaves/05183e90-d06b-4f85-9068-a847a6059167': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            message: string;
        };
    };
};
declare namespace leavesList {
    export let success: boolean;
    let status_1: number;
    export { status_1 as status };
    export let message: string;
    export let data: ({
        id: string;
        staff: {
            id: string;
            first_name: string;
            last_name: string;
            email: string;
        };
        department: {
            id: string;
            name: string;
        };
        type: string;
        start_date: string;
        end_date: string;
        number_of_days: number;
        response_note: null;
        status: number;
        created_at: string;
        updated_at: string;
        note: string;
        leave_document: {
            id: string;
            name: string;
            url: string;
            category: string;
        };
        substitute: {
            id: string;
            first_name: string;
            last_name: string;
            email: string;
        };
    } | {
        id: string;
        staff: {
            id: string;
            first_name: string;
            last_name: string;
            email: string;
        };
        department: {
            id: string;
            name: string;
        };
        type: string;
        start_date: string;
        end_date: string;
        number_of_days: number;
        response_note: null;
        status: number;
        created_at: string;
        updated_at: string;
        note: null;
        substitute: null;
        leave_document?: never;
    })[];
    export let count: number;
}
export {};
//# sourceMappingURL=leaves.d.ts.map