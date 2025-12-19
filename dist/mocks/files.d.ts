export const filesMocks: {
    'POST /api/files/upload': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                name: string;
                url: string;
                type: string;
                size: number;
            };
            message: string;
        };
    };
    'GET /api/files': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: ({
                id: string;
                assignmentID: string;
                assignment_type: string;
                department: {
                    id: string;
                    name: string;
                };
                domainID: string;
                category: string;
                name: string;
                media_url: string;
                type: string;
                document_type: null;
                status: number;
                created_at: string;
                updated_at: string;
                size: number;
                deleted_at: null;
            } | {
                id: string;
                assignmentID: string;
                assignment_type: string;
                domainID: string;
                category: string;
                name: string;
                media_url: string;
                type: string;
                document_type: null;
                status: number;
                created_at: string;
                updated_at: string;
                size: number;
                deleted_at: null;
                department?: never;
            })[];
            count: number;
            message: string;
        };
    };
    'GET /api/files/1c09ae25-525e-46de-be6c-5faa8ac9271f': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                assignmentID: string;
                assignment_type: string;
                department: {
                    id: string;
                    name: string;
                };
                domainID: string;
                category: string;
                name: string;
                media_url: string;
                type: string;
                document_type: null;
                status: number;
                created_at: string;
                updated_at: string;
                size: number;
                deleted_at: null;
            };
            message: string;
        };
    };
    'DELETE /api/files/1c09ae25-525e-46de-be6c-5faa8ac9271f': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                message: string;
                status: number;
            };
            message: string;
        };
    };
};
//# sourceMappingURL=files.d.ts.map