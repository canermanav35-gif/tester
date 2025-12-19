export const staffPortalDepartmentsMock: {
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
export const staffPortalMocks: {
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
};
//# sourceMappingURL=staffPortal.d.ts.map