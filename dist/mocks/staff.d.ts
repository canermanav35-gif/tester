export const staffMocks: {
    'POST /api/staff': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                first_name: string;
                last_name: string;
                domainID: string;
                phone_number: number;
                email: string;
                status: number;
                is_user: boolean;
                departmentID: string;
                deleted_at: string;
                created_at: string;
                updated_at: string;
                profile: {
                    nationID: string;
                    gender: string;
                    photo: {};
                    about: string;
                    address: {
                        country: string;
                        city: string;
                        district: string;
                        address: string;
                    };
                    birth_date: string;
                    marital_status: string;
                    child_number: number;
                    emergency: {
                        name: string;
                        phone_number: string;
                    };
                    reference: string;
                };
                employment: {
                    position: string;
                    birth_place: string;
                    registered: {
                        country: string;
                        city: string;
                        district: string;
                        address: string;
                    };
                    is_fulltime: boolean;
                    started_at: string;
                    salary: number;
                    iban: string;
                    registration_number: string;
                    family: {
                        father_name: string;
                        father_occupation: string;
                        mother_name: string;
                        mother_occupation: string;
                    };
                    leave_day: number;
                };
                education: {
                    language_exams: {
                        name: string;
                        lang: string;
                        score: number;
                        year: number;
                    }[];
                    military_service: {
                        place: string;
                        status: string;
                        date: string;
                    };
                    schools: {
                        name: string;
                        type: string;
                        degree: string;
                        field_of_study: string;
                        graduation_year: string;
                    }[];
                };
                profileCompletionPercentage: number;
                userID: string;
                is_supervisor: boolean;
                onboarding_completed: boolean;
                department: {};
                leaves: {
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
                }[];
                expenseGroups: {};
                advances: {
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
                    amount: number;
                    response_note: string;
                    note: string;
                    responded_by: string;
                    status: number;
                    created_at: string;
                    updated_at: string;
                }[];
                leaveInfo: {
                    total: number;
                    used: number;
                    remaining: number;
                };
                advanceInfo: {
                    month: number;
                    monthName: string;
                    year: number;
                    approvedCount: number;
                    approvedAmount: number;
                    rejectedCount: number;
                    rejectedAmount: number;
                    pendingCount: number;
                    pendingAmount: number;
                }[];
                expenseInfo: {
                    month: number;
                    monthName: string;
                    year: number;
                    approvedCount: number;
                    approvedAmount: number;
                    rejectedCount: number;
                    rejectedAmount: number;
                    pendingCount: number;
                    pendingAmount: number;
                }[];
            };
            message: string;
        };
    };
    'GET /api/staff': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: ({
                id: string;
                first_name: string;
                last_name: string;
                domainID: string;
                phone_number: string;
                email: string;
                status: number;
                is_user: boolean;
                departmentID: string;
                deleted_at: null;
                created_at: string;
                updated_at: string;
                profileCompletionPercentage: number;
                userID: string;
                onboarding_completed: boolean;
                role: string;
            } | {
                id: string;
                first_name: string;
                last_name: string;
                domainID: string;
                phone_number: string;
                email: string;
                status: number;
                is_user: boolean;
                departmentID: string;
                deleted_at: null;
                created_at: string;
                updated_at: string;
                profileCompletionPercentage: number;
                userID: null;
                onboarding_completed: boolean;
                role: string;
            })[];
            count: number;
            message: string;
        };
    };
    'GET /api/staff/e50d8141-9952-462b-8f29-2083aa12d3b9?relations=profile&relations=education&relations=employment&relations=tracking&relations=department&relations=leaves&relations=expenses&relations=advances': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                first_name: string;
                last_name: string;
                domainID: string;
                phone_number: string;
                email: string;
                status: number;
                is_user: boolean;
                departmentID: string;
                deleted_at: null;
                created_at: string;
                updated_at: string;
                profile: {
                    id: string;
                    nationID: string;
                    gender: null;
                    photo_file_id: null;
                    photo_file: null;
                    about: null;
                    address: null;
                    birth_date: null;
                    marital_status: null;
                    child_number: number;
                    emergency: null;
                    reference: null;
                };
                employment: {
                    id: string;
                    position: string;
                    birth_place: null;
                    registered: null;
                    is_fulltime: boolean;
                    started_at: null;
                    salary: string;
                    iban: null;
                    family: null;
                    registration_number: null;
                    leave_day: number;
                };
                education: {
                    id: string;
                    schools: never[];
                    language_exams: never[];
                    military_service: null;
                };
                profileCompletionPercentage: number;
                userID: string;
                is_supervisor: boolean;
                onboarding_completed: boolean;
                department: {
                    id: string;
                    domainID: string;
                    parentID: null;
                    locationID: string;
                    location: {
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
                        qrCodeS3Key: string;
                        status: number;
                        created_at: string;
                        updated_at: string;
                        deleted_at: null;
                    };
                    name: string;
                    description: string;
                    work_schedule: {
                        work_end_time: string;
                        lunch_end_time: string;
                        work_start_time: string;
                        lunch_start_time: string;
                    };
                    supervisor: {
                        id: string;
                        domainID: string;
                        status: number;
                        userID: string;
                        departmentID: string;
                        created_at: string;
                        updated_at: string;
                        deleted_at: null;
                    };
                    status: number;
                    leave_day: number;
                    created_at: string;
                    updated_at: string;
                    deleted_at: null;
                };
                leaveInfo: {
                    total: number;
                    used: number;
                    remaining: number;
                };
                advanceInfo: {
                    month: number;
                    monthName: string;
                    year: number;
                    approvedCount: number;
                    approvedAmount: number;
                    rejectedCount: number;
                    rejectedAmount: number;
                    pendingCount: number;
                    pendingAmount: number;
                }[];
                expenseInfo: {
                    month: number;
                    monthName: string;
                    year: number;
                    approvedCount: number;
                    approvedAmount: number;
                    rejectedCount: number;
                    rejectedAmount: number;
                    pendingCount: number;
                    pendingAmount: number;
                }[];
                role: string;
                leaves: never[];
                expenseGroups: never[];
                advances: never[];
            };
            message: string;
        };
    };
    'GET /api/staff/62ec1842-aee6-4bdb-92f7-96eedaf1f33b?relations=profile&relations=education&relations=employment&relations=tracking&relations=department&relations=leaves&relations=expenses&relations=advances': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                email: string;
                profileCompletionPercentage: number;
                department: {
                    id: string;
                };
            };
            message: string;
        };
    };
    'DELETE /api/staff/62ec1842-aee6-4bdb-92f7-96eedaf1f33b': {
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
    'DELETE /api/staff/c4c55637-64aa-4376-ad31-ba6e92b98360': {
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
    'GET /api/staff/files/e0a35fc0-8375-4f2e-912f-5ecfa24a788b': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                name: string;
                staff_id: string;
                media_url: string;
                file_type: string;
            }[];
            count: number;
            message: string;
        };
    };
    'GET /api/staff/export/excel': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            fileUrl: string;
            totalRecords: number;
            activeRecords: number;
            columns: string[];
            exportedAt: string;
            message: string;
            status: number;
        };
    };
    'GET /api/staff/export/pdf?columns=first_name&columns=last_name&columns=email&columns=phone_number&columns=department&columns=status&columns=is_user&columns=created_at&columns=updated_at&columns=birth_date&columns=gender&columns=marital_status&columns=nation_id&columns=address&columns=emergency_contact&columns=child_number&columns=photo&columns=about&columns=reference&columns=position&columns=is_fulltime&columns=started_at&columns=birth_place&columns=family&columns=salary&columns=iban&columns=registration_number&columns=registered_location&columns=department_location&columns=language_exams&columns=military_service&columns=schools': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            fileUrl: string;
            totalRecords: number;
            exportedAt: string;
            message: string;
            status: number;
        };
    };
};
//# sourceMappingURL=staff.d.ts.map