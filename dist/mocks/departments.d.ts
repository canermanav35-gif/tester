export namespace departmentsListMock {
    let status: number;
    let headers: {};
    namespace data {
        export let success: boolean;
        let status_1: number;
        export { status_1 as status };
        let data_1: {
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
        export { data_1 as data };
        export let count: number;
        export let message: string;
    }
}
export namespace departmentsTreeMock {
    let status_2: number;
    export { status_2 as status };
    let headers_1: {};
    export { headers_1 as headers };
    let data_2: {
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
    export { data_2 as data };
}
export namespace departmentDetailMock {
    let status_3: number;
    export { status_3 as status };
    let headers_2: {};
    export { headers_2 as headers };
    export namespace data_3 {
        let success_1: boolean;
        export { success_1 as success };
        let status_4: number;
        export { status_4 as status };
        export namespace data_4 {
            export let id: string;
            export let name: string;
            export let description: string;
            export namespace work_schedule {
                let work_start_time: string;
                let work_end_time: string;
                let lunch_start_time: string;
                let lunch_end_time: string;
            }
            export let supervisor: null;
            let status_5: number;
            export { status_5 as status };
            export let parent: null;
            export namespace location {
                let id_1: string;
                export { id_1 as id };
                let name_1: string;
                export { name_1 as name };
            }
            export let children: {
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
            export let staffCount: number;
            export let staff: {
                id: string;
                first_name: string;
                last_name: string;
                email: string;
            }[];
            export let leave_day: number;
            export let created_at: string;
            export let updated_at: string;
            export let permissions: never[];
        }
        export { data_4 as data };
        let message_1: string;
        export { message_1 as message };
    }
    export { data_3 as data };
}
export namespace departmentUpdateMock {
    let status_6: number;
    export { status_6 as status };
    let headers_3: {};
    export { headers_3 as headers };
    export namespace data_5 {
        let success_2: boolean;
        export { success_2 as success };
        let status_7: number;
        export { status_7 as status };
        export namespace data_6 {
            let id_2: string;
            export { id_2 as id };
            let name_2: string;
            export { name_2 as name };
            let description_1: string;
            export { description_1 as description };
            export namespace work_schedule_1 {
                let work_start_time_1: string;
                export { work_start_time_1 as work_start_time };
                let work_end_time_1: string;
                export { work_end_time_1 as work_end_time };
                let lunch_start_time_1: string;
                export { lunch_start_time_1 as lunch_start_time };
                let lunch_end_time_1: string;
                export { lunch_end_time_1 as lunch_end_time };
            }
            export { work_schedule_1 as work_schedule };
            let supervisor_1: null;
            export { supervisor_1 as supervisor };
            let status_8: number;
            export { status_8 as status };
            let parent_1: null;
            export { parent_1 as parent };
            export namespace location_1 {
                let id_3: string;
                export { id_3 as id };
                let name_3: string;
                export { name_3 as name };
            }
            export { location_1 as location };
            let children_1: {
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
            export { children_1 as children };
            let leave_day_1: number;
            export { leave_day_1 as leave_day };
            let created_at_1: string;
            export { created_at_1 as created_at };
            let updated_at_1: string;
            export { updated_at_1 as updated_at };
        }
        export { data_6 as data };
        let message_2: string;
        export { message_2 as message };
    }
    export { data_5 as data };
}
export namespace departmentSupervisorMock {
    let status_9: number;
    export { status_9 as status };
    let headers_4: {};
    export { headers_4 as headers };
    export namespace data_7 {
        let success_3: boolean;
        export { success_3 as success };
        let status_10: number;
        export { status_10 as status };
        export namespace data_8 {
            let id_4: string;
            export { id_4 as id };
            let name_4: string;
            export { name_4 as name };
            let description_2: string;
            export { description_2 as description };
            export namespace work_schedule_2 {
                let work_start_time_2: string;
                export { work_start_time_2 as work_start_time };
                let work_end_time_2: string;
                export { work_end_time_2 as work_end_time };
                let lunch_start_time_2: string;
                export { lunch_start_time_2 as lunch_start_time };
                let lunch_end_time_2: string;
                export { lunch_end_time_2 as lunch_end_time };
            }
            export { work_schedule_2 as work_schedule };
            export namespace supervisor_2 {
                let status_11: number;
                export { status_11 as status };
                export namespace user {
                    let id_5: string;
                    export { id_5 as id };
                    export let first_name: string;
                    export let last_name: string;
                    export let email: string;
                }
                export let selectedStaffCount: number;
            }
            export { supervisor_2 as supervisor };
            let status_12: number;
            export { status_12 as status };
            let parent_2: null;
            export { parent_2 as parent };
            export namespace location_2 {
                let id_6: string;
                export { id_6 as id };
                let name_5: string;
                export { name_5 as name };
            }
            export { location_2 as location };
            let staffCount_1: number;
            export { staffCount_1 as staffCount };
            let leave_day_2: number;
            export { leave_day_2 as leave_day };
            let created_at_2: string;
            export { created_at_2 as created_at };
            let updated_at_2: string;
            export { updated_at_2 as updated_at };
        }
        export { data_8 as data };
        let message_3: string;
        export { message_3 as message };
    }
    export { data_7 as data };
}
export namespace departmentCreateMock {
    let status_13: number;
    export { status_13 as status };
    let headers_5: {};
    export { headers_5 as headers };
    export namespace data_9 {
        let success_4: boolean;
        export { success_4 as success };
        let status_14: number;
        export { status_14 as status };
        export namespace data_10 {
            let id_7: string;
            export { id_7 as id };
            let name_6: string;
            export { name_6 as name };
            let description_3: string;
            export { description_3 as description };
            export namespace work_schedule_3 {
                let work_start_time_3: string;
                export { work_start_time_3 as work_start_time };
                let work_end_time_3: string;
                export { work_end_time_3 as work_end_time };
                let lunch_start_time_3: string;
                export { lunch_start_time_3 as lunch_start_time };
                let lunch_end_time_3: string;
                export { lunch_end_time_3 as lunch_end_time };
            }
            export { work_schedule_3 as work_schedule };
            let status_15: number;
            export { status_15 as status };
            export namespace parent_3 {
                let id_8: string;
                export { id_8 as id };
            }
            export { parent_3 as parent };
            export namespace location_3 {
                let id_9: string;
                export { id_9 as id };
            }
            export { location_3 as location };
            let leave_day_3: number;
            export { leave_day_3 as leave_day };
            let created_at_3: string;
            export { created_at_3 as created_at };
            let updated_at_3: string;
            export { updated_at_3 as updated_at };
        }
        export { data_10 as data };
        let message_4: string;
        export { message_4 as message };
    }
    export { data_9 as data };
}
export namespace departmentDeleteMock {
    let status_16: number;
    export { status_16 as status };
    let headers_6: {};
    export { headers_6 as headers };
    export namespace data_11 {
        let success_5: boolean;
        export { success_5 as success };
        let status_17: number;
        export { status_17 as status };
        export namespace data_12 {
            let message_5: string;
            export { message_5 as message };
        }
        export { data_12 as data };
        let message_6: string;
        export { message_6 as message };
    }
    export { data_11 as data };
}
export const departmentMocks: {
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
};
//# sourceMappingURL=departments.d.ts.map