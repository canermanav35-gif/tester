export function getMockResponse(method: any, url: any): any;
export const mockResponses: {
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
    'GET /api/staff-portal/departments': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                name: string;
                description: string;
                work_schedule: {
                    work_start_time: string;
                    work_end_time: string;
                    lunch_start_time: string;
                    lunch_end_time: string;
                };
                supervisor: null;
                status: number;
                parent: {
                    id: string;
                    name: string;
                };
                location: {
                    id: string;
                    name: string;
                };
                staffCount: number;
                leave_day: number;
                created_at: string;
                updated_at: string;
            }[];
            count: number;
            message: string;
        };
        'PATCH /api/staff-portal/payrolls//verify': {
            status: number;
            headers: {};
            data: {
                success: boolean;
                status: number;
                data: {
                    id: string;
                    domainID: string;
                    year: number;
                    month: number;
                    staffID: string;
                    staff: {
                        id: string;
                        first_name: string;
                        last_name: string;
                        email: string;
                        department: {
                            id: string;
                            name: string;
                        };
                    };
                    departmentID: string;
                    payroll_file: {
                        id: string;
                        name: string;
                        url: string;
                        category: string;
                        type: string;
                    };
                    status: number;
                    created_at: string;
                    updated_at: string;
                    deleted_at: null;
                };
                message: string;
            };
        };
        'PATCH /api/staff-portal/payrolls/verify': {
            status: number;
            headers: {};
            data: {
                success: boolean;
                status: number;
                data: {
                    id: string;
                    domainID: string;
                    year: number;
                    month: number;
                    staffID: string;
                    staff: {
                        id: string;
                        first_name: string;
                        last_name: string;
                        email: string;
                        department: {
                            id: string;
                            name: string;
                        };
                    };
                    departmentID: string;
                    payroll_file: {
                        id: string;
                        name: string;
                        url: string;
                        category: string;
                        type: string;
                    };
                    status: number;
                    created_at: string;
                    updated_at: string;
                    deleted_at: null;
                };
                message: string;
            };
        };
    };
    'GET /api/staff-portal/departments/tree': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                name: string;
                code: string;
                description: string;
                work_schedule: {
                    work_start_time: string;
                    work_end_time: string;
                    lunch_start_time: string;
                    lunch_end_time: string;
                };
                supervisor: {
                    id: string;
                    status: number;
                    user: {
                        id: string;
                        first_name: string;
                        last_name: string;
                        email: string;
                    };
                    selectedStaffCount: number;
                };
                status: number;
                parent: {
                    id: string;
                    name: string;
                };
                location: {
                    id: string;
                    name: string;
                    buildingName: string;
                    roomName: string;
                };
                children: string[];
                staffCount: number;
                staff: {
                    id: string;
                    first_name: string;
                    last_name: string;
                    email: string;
                }[];
                leave_day: number;
                created_at: string;
                updated_at: string;
                permissions: string[];
            }[];
            count: number;
            message: string;
        };
    };
    'GET /api/staff-portal/profile': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                first_name: string;
                last_name: string;
                phone_number: string;
                email: string;
                photo: string;
                about: string;
                nationID: string;
                gender: string;
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
                employment: {
                    position: string;
                    birth_place: string;
                    registered: {
                        country: string;
                        city: string;
                        district: string;
                    };
                    is_fulltime: boolean;
                    salary: number;
                    iban: string;
                    registration_number: string;
                    family: {
                        spouse_name: string;
                        children_count: number;
                    };
                };
                education: {
                    schools: {
                        name: string;
                        degree: string;
                        field: string;
                        graduation_year: number;
                    }[];
                    language_exams: {
                        language: string;
                        exam_type: string;
                        score: number;
                        date: string;
                    }[];
                    military_service: {
                        status: string;
                        start_date: string;
                        end_date: string;
                    };
                };
                created_at: string;
                updated_at: string;
                domain: {
                    id: string;
                    company: string;
                    name: string;
                    logo: string;
                    industry: string;
                    note: string;
                    status: number;
                    info: {
                        vat: string;
                        tax_number: string;
                        address: string;
                        email: string;
                        phone_number: string;
                        website: string;
                    };
                    contact: {
                        first_name: string;
                        last_name: string;
                        phone_number: string;
                        email: string;
                        title: string;
                    };
                    domains: {};
                    created_at: string;
                    updated_at: string;
                };
                domains: {
                    id: string;
                    company: string;
                    name: string;
                    logo: string;
                    industry: string;
                    note: string;
                    status: number;
                    info: {
                        vat: string;
                        tax_number: string;
                        address: string;
                        email: string;
                        phone_number: string;
                        website: string;
                    };
                    contact: {
                        first_name: string;
                        last_name: string;
                        phone_number: string;
                        email: string;
                        title: string;
                    };
                    domains: {};
                    created_at: string;
                    updated_at: string;
                }[];
            };
        };
    };
    'POST /api/staff-portal/profile-photo': {
        status: number;
        headers: {};
        data: {
            id: string;
            name: string;
            url: string;
            category: string;
        };
    };
    'GET /api/staff-portal/profile-photo': {
        status: number;
        headers: {};
        data: {
            id: string;
            name: string;
            url: string;
            category: string;
        };
    };
    'DELETE /api/staff-portal/profile-photo': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            message: string;
        };
    };
    'GET /api/staff-portal/find-staff': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                full_name: string;
                email: string;
                department_name: string;
                job_title: string;
                profile_photo: null;
            }[];
            count: number;
            message: string;
        };
    };
    'GET /api/staff-portal/staffs': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                first_name: string;
                last_name: string;
                full_name: string;
                email: string;
                phone_number: string;
                status: string;
            }[];
            count: number;
            message: string;
        };
    };
    'GET /api/staff-portal/staff-files': {
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
                document_type: string;
            }[];
            count: number;
            message: string;
        };
    };
    'POST /api/staff-portal/upload-file': {
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
                document_type: string;
            };
            message: string;
        };
    };
    'PATCH /api/staff-portal/profile/profile-info': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                success: boolean;
                message: string;
                staff_id: string;
                updated_at: string;
            };
            message: string;
        };
    };
    'POST /api/staff-portal/request-leave': {
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
            };
            message: string;
        };
    };
    'GET /api/staff-portal/leave-requests': {
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
            }[];
            count: number;
            summary: {
                totalAllocated: number;
                totalUsed: number;
                totalRemaining: number;
                perType: {
                    type: string;
                    allocated: number;
                    used: number;
                    remaining: number;
                }[];
            };
            message: string;
        };
    };
    'GET /api/staff-portal/assignments': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                staffID: string;
                staff: {
                    id: string;
                    first_name: string;
                    last_name: string;
                    email: string;
                };
                assignedBy: {
                    id: string;
                    first_name: string;
                    last_name: string;
                    email: string;
                };
                department: {
                    id: string;
                    name: string;
                };
                project: {
                    id: string;
                    name: string;
                    description: string;
                };
                type: number;
                start_date: string;
                end_date: string;
                note: string;
                in_city: boolean;
                status: number;
                created_at: string;
                updated_at: string;
                deleted_at: null;
            }[];
            count: number;
            message: string;
        };
    };
    'POST /api/staff-portal/assignments/f9d03e30-bc1a-4744-b565-ba1089a7d0be/approve/send-otp': {
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
    'PATCH /api/staff-portal/assignments/f9d03e30-bc1a-4744-b565-ba1089a7d0be/approve': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                staffID: string;
                staff: {
                    id: string;
                    first_name: string;
                    last_name: string;
                    email: string;
                };
                assignedBy: {
                    id: string;
                    first_name: string;
                    last_name: string;
                    email: string;
                };
                department: {
                    id: string;
                    name: string;
                };
                project: {
                    id: string;
                    name: string;
                    description: string;
                };
                type: number;
                start_date: string;
                end_date: string;
                note: string;
                in_city: boolean;
                status: number;
                created_at: string;
                updated_at: string;
                deleted_at: null;
            };
            message: string;
        };
    };
    'PATCH /api/staff-portal/assignments/1edbccc7-445c-48ab-887f-c933b318a9ce/reject': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                staffID: string;
                staff: {
                    id: string;
                    first_name: string;
                    last_name: string;
                    email: string;
                };
                assignedBy: {
                    id: string;
                    first_name: string;
                    last_name: string;
                    email: string;
                };
                department: {
                    id: string;
                    name: string;
                };
                project: {
                    id: string;
                    name: string;
                    description: string;
                };
                type: number;
                start_date: string;
                end_date: string;
                note: string;
                in_city: boolean;
                status: number;
                created_at: string;
                updated_at: string;
                deleted_at: null;
            };
            message: string;
        };
    };
    'PATCH /api/staff-portal/assignments/f9d03e30-bc1a-4744-b565-ba1089a7d0be/reject': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                staffID: string;
                staff: {
                    id: string;
                    first_name: string;
                    last_name: string;
                    email: string;
                };
                assignedBy: {
                    id: string;
                    first_name: string;
                    last_name: string;
                    email: string;
                };
                department: {
                    id: string;
                    name: string;
                };
                project: {
                    id: string;
                    name: string;
                    description: string;
                };
                type: number;
                start_date: string;
                end_date: string;
                note: string;
                in_city: boolean;
                status: number;
                created_at: string;
                updated_at: string;
                deleted_at: null;
            };
            message: string;
        };
    };
    'GET /api/staff-portal/projects': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                name: string;
                description: string;
                start_time: string;
                end_time: string;
                domainID: string;
                created_at: string;
                updated_at: string;
                deleted_at: null;
            }[];
            count: number;
            message: string;
        };
    };
    'GET /api/staff-portal/projects/28ea03cb-19c0-46f2-9a13-44f21ab94ded': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                name: string;
                description: string;
                start_time: string;
                end_time: string;
                domainID: string;
                created_at: string;
                updated_at: string;
                deleted_at: null;
            };
            message: string;
        };
    };
    'GET /api/staff-portal/announcements': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                domainID: string;
                departmentID: string;
                title: string;
                type: number;
                content: string;
                image_file: {
                    id: string;
                    name: string;
                    url: string;
                    category: string;
                    type: string;
                };
                start_date: string;
                end_date: string;
                scope: number;
                created_by: string;
                status: number;
                created_at: string;
                updated_at: string;
                deleted_at: null;
            }[];
            count: number;
            message: string;
        };
    };
    'GET /api/staff-portal/entrust': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                description: string;
                groupID: string;
                status: number;
                return_date: string;
                response_note: string;
                created_at: string;
                updated_at: string;
                deleted_at: null;
                asset: {
                    id: string;
                    name: string;
                    type: string;
                    assetType: {
                        code: string;
                        name: string;
                        description: string;
                    };
                    category: {
                        id: string;
                        name: string;
                    };
                    location: {
                        id: string;
                        name: string;
                        buildingName: string;
                        roomName: string;
                    };
                    image_file: {
                        id: string;
                        name: string;
                        url: string;
                        category: string;
                        type: string;
                    };
                    invoice_file: {
                        id: string;
                        name: string;
                        url: string;
                        category: string;
                        type: string;
                    };
                    info: string;
                    note: string;
                    status: number;
                    statusKey: string;
                    payload: {};
                    created_at: string;
                    updated_at: string;
                };
                staff: {
                    id: string;
                    first_name: string;
                    last_name: string;
                    email: string;
                };
                assignedBy: {
                    id: string;
                    first_name: string;
                    last_name: string;
                    email: string;
                };
                location: {
                    id: string;
                    name: string;
                    buildingName: string;
                    roomName: string;
                };
                department: {
                    id: string;
                    name: string;
                };
            }[];
            count: number;
            message: string;
        };
    };
    'GET /api/staff-portal/entrust/grouped': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                groupID: string;
                count: number;
                status: number;
                data: {
                    id: string;
                    description: string;
                    groupID: string;
                    status: number;
                    return_date: string;
                    response_note: string;
                    created_at: string;
                    updated_at: string;
                    deleted_at: null;
                    asset: {
                        id: string;
                        name: string;
                        type: string;
                        assetType: {
                            code: string;
                            name: string;
                            description: string;
                        };
                        category: {
                            id: string;
                            name: string;
                        };
                        location: {
                            id: string;
                            name: string;
                            buildingName: string;
                            roomName: string;
                        };
                        image_file: {
                            id: string;
                            name: string;
                            url: string;
                            category: string;
                            type: string;
                        };
                        invoice_file: {
                            id: string;
                            name: string;
                            url: string;
                            category: string;
                            type: string;
                        };
                        info: string;
                        note: string;
                        status: number;
                        statusKey: string;
                        payload: {};
                        created_at: string;
                        updated_at: string;
                    };
                    staff: {
                        id: string;
                        first_name: string;
                        last_name: string;
                        email: string;
                    };
                    assignedBy: {
                        id: string;
                        first_name: string;
                        last_name: string;
                        email: string;
                    };
                    location: {
                        id: string;
                        name: string;
                        buildingName: string;
                        roomName: string;
                    };
                    department: {
                        id: string;
                        name: string;
                    };
                }[];
            }[];
            count: number;
        };
    };
    'GET /api/staff-portal/entrust/ee2d69ab-6b88-4500-9013-901a7fd7db2d': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                description: string;
                groupID: string;
                status: number;
                return_date: null;
                response_note: null;
                created_at: string;
                updated_at: string;
                deleted_at: null;
            };
            message: string;
        };
    };
    'GET /api/staff-portal/entrust/': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                description: string;
                groupID: string;
                status: number;
                return_date: null;
                response_note: null;
                created_at: string;
                updated_at: string;
                deleted_at: null;
            };
            message: string;
        };
    };
    'POST /api/staff-portal/entrust/send-otp': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                otpId: string;
                expiryMinutes: number;
                message: string;
            };
            message: string;
        };
    };
    'PATCH /api/staff-portal/entrust/verify': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                description: string;
                groupID: string;
                status: number;
                return_date: string;
                response_note: string;
                created_at: string;
                updated_at: string;
                deleted_at: null;
                asset: {
                    id: string;
                    name: string;
                    type: string;
                    assetType: {
                        code: string;
                        name: string;
                        description: string;
                    };
                    category: {
                        id: string;
                        name: string;
                    };
                    location: {
                        id: string;
                        name: string;
                        buildingName: string;
                        roomName: string;
                    };
                    image_file: {
                        id: string;
                        name: string;
                        url: string;
                        category: string;
                        type: string;
                    };
                    invoice_file: {
                        id: string;
                        name: string;
                        url: string;
                        category: string;
                        type: string;
                    };
                    info: string;
                    note: string;
                    status: number;
                    statusKey: string;
                    payload: {};
                    created_at: string;
                    updated_at: string;
                };
                staff: {
                    id: string;
                    first_name: string;
                    last_name: string;
                    email: string;
                };
                assignedBy: {
                    id: string;
                    first_name: string;
                    last_name: string;
                    email: string;
                };
                location: {
                    id: string;
                    name: string;
                    buildingName: string;
                    roomName: string;
                };
                department: {
                    id: string;
                    name: string;
                };
            };
            message: string;
        };
    };
    'GET /api/staff-portal/expenses': {
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
                    email: string;
                };
                department: {
                    id: string;
                    name: string;
                };
                project: {
                    id: string;
                    name: string;
                    description: string;
                };
                finance: null;
                date: string;
                note: string;
                status: number;
                tags: {
                    id: string;
                    name: string;
                }[];
                total_amount: number;
                total_approved_amount: number;
                expenses: {
                    id: string;
                    domainID: string;
                    staffID: string;
                    departmentID: string;
                    expenseGroupID: string;
                    projectID: string;
                    invoice_number: string;
                    amount: number;
                    date: string;
                    photo_file: {
                        id: string;
                        name: string;
                        url: string;
                        category: string;
                        type: string;
                    };
                    response_note: null;
                    note: string;
                    responsed_by: null;
                    status: number;
                    created_at: string;
                    updated_at: string;
                }[];
                created_at: string;
                updated_at: string;
            }[];
            count: number;
            message: string;
        };
    };
    'GET /api/staff-portal/expenses/tags': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                name: string;
            }[];
            count: number;
            message: string;
        };
    };
    'GET /api/staff-portal/expenses/484f7eb3-d69c-43aa-a484-093909d029f0': {
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
                    email: string;
                };
                department: {
                    id: string;
                    name: string;
                };
                project: {
                    id: string;
                    name: string;
                    description: string;
                };
                finance: null;
                date: string;
                note: string;
                status: number;
                tags: {
                    id: string;
                    name: string;
                }[];
                total_amount: number;
                total_approved_amount: number;
                expenses: {
                    id: string;
                    domainID: string;
                    staffID: string;
                    departmentID: string;
                    expenseGroupID: string;
                    projectID: string;
                    invoice_number: string;
                    amount: number;
                    date: string;
                    photo_file: {
                        id: string;
                        name: string;
                        url: string;
                        category: string;
                        type: string;
                    };
                    response_note: null;
                    note: string;
                    responsed_by: null;
                    status: number;
                    created_at: string;
                    updated_at: string;
                }[];
                created_at: string;
                updated_at: string;
            };
            message: string;
        };
    };
    'GET /api/staff-portal/expenses/': {
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
                    email: string;
                };
                department: {
                    id: string;
                    name: string;
                };
                project: {
                    id: string;
                    name: string;
                    description: string;
                };
                finance: null;
                date: string;
                note: string;
                status: number;
                tags: {
                    id: string;
                    name: string;
                }[];
                total_amount: number;
                total_approved_amount: number;
                expenses: {
                    id: string;
                    domainID: string;
                    staffID: string;
                    departmentID: string;
                    expenseGroupID: string;
                    projectID: string;
                    invoice_number: string;
                    amount: number;
                    date: string;
                    photo_file: {
                        id: string;
                        name: string;
                        url: string;
                        category: string;
                        type: string;
                    };
                    response_note: null;
                    note: string;
                    responsed_by: null;
                    status: number;
                    created_at: string;
                    updated_at: string;
                }[];
                created_at: string;
                updated_at: string;
            };
            message: string;
        };
    };
    'POST /api/staff-portal/expense-group-tags': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                name: string;
            };
            message: string;
        };
    };
    'GET /api/staff-portal/expense-group-tags': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                name: string;
            }[];
            count: number;
            message: string;
        };
    };
    'POST /api/staff-portal/overtime-requests': {
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
                    email: string;
                };
                department: {
                    id: string;
                    name: string;
                };
                extra_hours: number;
                overtime_date: string;
                response_note: null;
                note: string;
                responded_by: null;
                status: number;
                created_at: string;
                updated_at: string;
            };
            message: string;
        };
    };
    'GET /api/staff-portal/overtime-requests': {
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
                    email: string;
                };
                department: {
                    id: string;
                    name: string;
                };
                extra_hours: number;
                overtime_date: string;
                response_note: null;
                note: string;
                responded_by: null;
                status: number;
                created_at: string;
                updated_at: string;
            }[];
            count: number;
            message: string;
        };
    };
    'POST /api/staff-portal/advance-request': {
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
                    email: string;
                };
                department: {
                    id: string;
                    name: string;
                };
                amount: number;
                response_note: null;
                note: string;
                responded_by: null;
                status: number;
                created_at: string;
                updated_at: string;
            };
            message: string;
        };
    };
    'GET /api/staff-portal/advance-requests': {
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
                    email: string;
                };
                department: {
                    id: string;
                    name: string;
                };
                amount: number;
                response_note: null;
                note: string;
                responded_by: null;
                status: number;
                created_at: string;
                updated_at: string;
            }[];
            count: number;
            message: string;
        };
    };
    'GET /api/staff-portal/checkin-status': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                is_logged: boolean;
            };
            message: string;
        };
    };
    'POST /api/staff-portal/checkin': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                message: string;
                tracking_id: string;
                check_in_time: string;
                check_out_time: string;
                duration_minutes: number;
                operation_type: string;
            };
            message: string;
        };
    };
    'GET /api/staff-portal/attendance-records': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                in_time: string;
                out_time: string;
                duration_minutes: number;
                status: number;
                note: string;
                location: {
                    id: string;
                    name: string;
                    buildingName: string;
                    roomName: string;
                };
                created_at: string;
                updated_at: string;
            }[];
            count: number;
            message: string;
        };
    };
    'GET /api/staff-portal/shifts?startDate=2025-09-01&endDate=2025-09-30': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                date: string;
                work_hours: string;
                is_active: boolean;
            }[];
            message: string;
        };
    };
    'GET /api/staff-portal/payrolls': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                domainID: string;
                year: number;
                month: number;
                staffID: string;
                staff: {
                    id: string;
                    first_name: string;
                    last_name: string;
                    email: string;
                    department: {
                        id: string;
                        name: string;
                    };
                };
                departmentID: string;
                payroll_file: {
                    id: string;
                    name: string;
                    url: string;
                    category: string;
                    type: string;
                };
                status: number;
                created_at: string;
                updated_at: string;
                deleted_at: null;
            }[];
            count: number;
            message: string;
        };
    };
    'PATCH /api/staff-portal/payrolls/550e8400-e29b-41d4-a716-446655440000/verify': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                domainID: string;
                year: number;
                month: number;
                staffID: string;
                staff: {
                    id: string;
                    first_name: string;
                    last_name: string;
                    email: string;
                    department: {
                        id: string;
                        name: string;
                    };
                };
                departmentID: string;
                payroll_file: {
                    id: string;
                    name: string;
                    url: string;
                    category: string;
                    type: string;
                };
                status: number;
                created_at: string;
                updated_at: string;
                deleted_at: null;
            };
            message: string;
        };
    };
    'PATCH /api/staff-portal/payrolls//verify': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                domainID: string;
                year: number;
                month: number;
                staffID: string;
                staff: {
                    id: string;
                    first_name: string;
                    last_name: string;
                    email: string;
                    department: {
                        id: string;
                        name: string;
                    };
                };
                departmentID: string;
                payroll_file: {
                    id: string;
                    name: string;
                    url: string;
                    category: string;
                    type: string;
                };
                status: number;
                created_at: string;
                updated_at: string;
                deleted_at: null;
            };
            message: string;
        };
    };
    'PATCH /api/staff-portal/payrolls/verify': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                domainID: string;
                year: number;
                month: number;
                staffID: string;
                staff: {
                    id: string;
                    first_name: string;
                    last_name: string;
                    email: string;
                    department: {
                        id: string;
                        name: string;
                    };
                };
                departmentID: string;
                payroll_file: {
                    id: string;
                    name: string;
                    url: string;
                    category: string;
                    type: string;
                };
                status: number;
                created_at: string;
                updated_at: string;
                deleted_at: null;
            };
            message: string;
        };
    };
    'GET /api/staff-portal/dashboard': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                profile: {
                    fullName: string;
                    position: string;
                    email: string;
                    department: {
                        id: string;
                        name: string;
                    };
                    supervisor: null;
                };
                department: {
                    id: string;
                    name: string;
                    description: string;
                };
                leaves: {
                    total: number;
                    used: number;
                    remaining: number;
                    leaves: never[];
                };
                upcomingBirthdays: never[];
                upcomingPublicHolidays: {
                    date: string;
                    name: string;
                }[];
                timeTracker: {
                    checkInTime: null;
                    checkOutTime: null;
                    status: number;
                    duration: string;
                };
                pendingApprovals: {
                    entrusts: number;
                    payrolls: number;
                    leaves: number;
                };
                demographics: {
                    type: string;
                    label: string;
                    items: {
                        name: string;
                        count: number;
                    }[];
                }[];
            };
            message: string;
        };
    };
    'POST /api/departments': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                name: string;
                description: string;
                work_schedule: {
                    work_start_time: string;
                    work_end_time: string;
                    lunch_start_time: string;
                    lunch_end_time: string;
                };
                status: number;
                parent: {
                    id: string;
                };
                location: {
                    id: string;
                };
                leave_day: number;
                created_at: string;
                updated_at: string;
            };
            message: string;
        };
    };
    'GET /api/departments': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                name: string;
                description: string;
                work_schedule: {
                    work_start_time: string;
                    work_end_time: string;
                    lunch_start_time: string;
                    lunch_end_time: string;
                };
                supervisor: null;
                status: number;
                parent: {
                    id: string;
                    name: string;
                };
                location: {
                    id: string;
                    name: string;
                };
                staffCount: number;
                leave_day: number;
                created_at: string;
                updated_at: string;
            }[];
            count: number;
            message: string;
        };
    };
    'GET /api/departments/tree': {
        status: number;
        headers: {};
        data: {
            id: string;
            name: string;
            code: string;
            description: string;
            work_schedule: {
                work_start_time: string;
                work_end_time: string;
                lunch_start_time: string;
                lunch_end_time: string;
            };
            supervisor: {
                id: string;
                status: number;
                user: {
                    id: string;
                    first_name: string;
                    last_name: string;
                    email: string;
                };
                selectedStaffCount: number;
            };
            status: number;
            parent: {
                id: string;
                name: string;
            };
            location: {
                id: string;
                name: string;
                buildingName: string;
                roomName: string;
            };
            children: string[];
            staffCount: number;
            staff: {
                id: string;
                first_name: string;
                last_name: string;
                email: string;
            }[];
            leave_day: number;
            created_at: string;
            updated_at: string;
            permissions: string[];
        }[];
    };
    'GET /api/departments/932eea8a-af1f-4ae9-8507-31fbd99d819a?withChildren=true&withStaff=true&withPermission=true&permissionFormat=FULL': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                name: string;
                description: string;
                work_schedule: {
                    work_start_time: string;
                    work_end_time: string;
                    lunch_start_time: string;
                    lunch_end_time: string;
                };
                supervisor: null;
                status: number;
                parent: null;
                location: {
                    id: string;
                    name: string;
                };
                children: {
                    id: string;
                    name: string;
                    description: string;
                    work_schedule: {
                        work_start_time: string;
                        work_end_time: string;
                        lunch_start_time: string;
                        lunch_end_time: string;
                    };
                    status: number;
                    leave_day: number;
                    created_at: string;
                    updated_at: string;
                }[];
                staffCount: number;
                staff: {
                    id: string;
                    first_name: string;
                    last_name: string;
                    email: string;
                }[];
                leave_day: number;
                created_at: string;
                updated_at: string;
                permissions: never[];
            };
            message: string;
        };
    };
    'PATCH /api/departments/932eea8a-af1f-4ae9-8507-31fbd99d819a': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                name: string;
                description: string;
                work_schedule: {
                    work_start_time: string;
                    work_end_time: string;
                    lunch_start_time: string;
                    lunch_end_time: string;
                };
                supervisor: null;
                status: number;
                parent: null;
                location: {
                    id: string;
                    name: string;
                };
                children: {
                    id: string;
                    name: string;
                    description: string;
                    work_schedule: {
                        work_start_time: string;
                        work_end_time: string;
                        lunch_start_time: string;
                        lunch_end_time: string;
                    };
                    status: number;
                    leave_day: number;
                    created_at: string;
                    updated_at: string;
                }[];
                leave_day: number;
                created_at: string;
                updated_at: string;
            };
            message: string;
        };
    };
    'DELETE /api/departments/264c657e-ed07-4022-ae92-eb3f64c5b541': {
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
    'PUT /api/departments/932eea8a-af1f-4ae9-8507-31fbd99d819a/supervisor': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                name: string;
                description: string;
                work_schedule: {
                    work_start_time: string;
                    work_end_time: string;
                    lunch_start_time: string;
                    lunch_end_time: string;
                };
                supervisor: {
                    status: number;
                    user: {
                        id: string;
                        first_name: string;
                        last_name: string;
                        email: string;
                    };
                    selectedStaffCount: number;
                };
                status: number;
                parent: null;
                location: {
                    id: string;
                    name: string;
                };
                staffCount: number;
                leave_day: number;
                created_at: string;
                updated_at: string;
            };
            message: string;
        };
    };
    'GET /api/departments/e5c7011b-6b73-4d76-8bec-bab6d6df1fe1?withChildren=true&withStaff=true&withPermission=true&permissionFormat=FULL': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                name: string;
                description: string;
                work_schedule: {
                    work_start_time: string;
                    work_end_time: string;
                    lunch_start_time: string;
                    lunch_end_time: string;
                };
                supervisor: null;
                status: number;
                parent: null;
                location: {
                    id: string;
                    name: string;
                };
                children: {
                    id: string;
                    name: string;
                    description: string;
                    work_schedule: {
                        work_start_time: string;
                        work_end_time: string;
                        lunch_start_time: string;
                        lunch_end_time: string;
                    };
                    status: number;
                    leave_day: number;
                    created_at: string;
                    updated_at: string;
                }[];
                staffCount: number;
                staff: {
                    id: string;
                    first_name: string;
                    last_name: string;
                    email: string;
                }[];
                leave_day: number;
                created_at: string;
                updated_at: string;
                permissions: never[];
            };
            message: string;
        };
    };
    'PATCH /api/departments/e5c7011b-6b73-4d76-8bec-bab6d6df1fe1': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                name: string;
                description: string;
                work_schedule: {
                    work_start_time: string;
                    work_end_time: string;
                    lunch_start_time: string;
                    lunch_end_time: string;
                };
                supervisor: null;
                status: number;
                parent: null;
                location: {
                    id: string;
                    name: string;
                };
                children: {
                    id: string;
                    name: string;
                    description: string;
                    work_schedule: {
                        work_start_time: string;
                        work_end_time: string;
                        lunch_start_time: string;
                        lunch_end_time: string;
                    };
                    status: number;
                    leave_day: number;
                    created_at: string;
                    updated_at: string;
                }[];
                leave_day: number;
                created_at: string;
                updated_at: string;
            };
            message: string;
        };
    };
    'DELETE /api/departments/e5c7011b-6b73-4d76-8bec-bab6d6df1fe1': {
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
    'PUT /api/departments/e5c7011b-6b73-4d76-8bec-bab6d6df1fe1/supervisor': {
        status: number;
        headers: {};
        data: {
            success: boolean;
            status: number;
            data: {
                id: string;
                name: string;
                description: string;
                work_schedule: {
                    work_start_time: string;
                    work_end_time: string;
                    lunch_start_time: string;
                    lunch_end_time: string;
                };
                supervisor: {
                    status: number;
                    user: {
                        id: string;
                        first_name: string;
                        last_name: string;
                        email: string;
                    };
                    selectedStaffCount: number;
                };
                status: number;
                parent: null;
                location: {
                    id: string;
                    name: string;
                };
                staffCount: number;
                leave_day: number;
                created_at: string;
                updated_at: string;
            };
            message: string;
        };
    };
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
//# sourceMappingURL=responses.d.ts.map