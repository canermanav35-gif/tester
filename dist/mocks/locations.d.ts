export const locationMocks: {
    'POST /api/locations': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                name: string;
                comments: string;
                address: {
                    country: string;
                    city: string;
                    district: string;
                    latitude: number;
                    longitude: number;
                };
                rooms: {
                    id: string;
                    name: string;
                }[];
                status: number;
                created_at: string;
                updated_at: string;
            };
            message: string;
        };
    };
    'GET /api/locations': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            message: string;
            data: ({
                id: string;
                domainID: string;
                name: string;
                comments: string;
                address: {
                    city: string;
                    country: string;
                    district: string;
                    latitude: number;
                    longitude: number;
                };
                qrCodeUrl: string;
                roomsCount: number;
                status: number;
                created_at: string;
                updated_at: string;
            } | {
                id: string;
                domainID: string;
                name: string;
                address: {
                    city: string;
                    country: string;
                    district: string;
                    latitude: number;
                    longitude: number;
                };
                qrCodeUrl: string;
                roomsCount: number;
                status: number;
                created_at: string;
                updated_at: string;
                comments?: never;
            })[];
            count: number;
        };
    };
    'GET /api/locations/6fcbbe0a-d683-4b66-920e-ba48186a974d?withRooms=false': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            message: string;
            data: {
                id: string;
                domainID: string;
                name: string;
                comments: string;
                address: {
                    city: string;
                    country: string;
                    district: string;
                    latitude: number;
                    longitude: number;
                };
                qrCodeUrl: string;
                roomsCount: number;
                status: number;
                created_at: string;
                updated_at: string;
            };
        };
    };
    'PATCH /api/locations/6fcbbe0a-d683-4b66-920e-ba48186a974d': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            message: string;
            data: {
                id: string;
                domainID: string;
                name: string;
                comments: string;
                address: {
                    city: string;
                    country: string;
                    district: string;
                    latitude: number;
                    longitude: number;
                };
                qrCodeUrl: string;
                roomsCount: number;
                rooms: {
                    id: string;
                    locationID: string;
                    name: string;
                    qrCodeUrl: string;
                    created_at: string;
                    updated_at: string;
                }[];
                status: number;
                created_at: string;
                updated_at: string;
            };
        };
    };
    'DELETE /api/locations/6fcbbe0a-d683-4b66-920e-ba48186a974d': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                message: string;
            };
            message: string;
        };
    };
    'GET /api/locations/6fcbbe0a-d683-4b66-920e-ba48186a974d/rooms': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            message: string;
            data: {
                id: string;
                locationID: string;
                name: string;
                qrCodeUrl: string;
                created_at: string;
                updated_at: string;
            }[];
            count: number;
        };
    };
};
//# sourceMappingURL=locations.d.ts.map