export type TestDefinition = {
    name: string;
    user?: string;
    method?: string;
    url: string;
    data?: any;
    params?: any;
    headers?: Record<string, any>;
    assertions?: any[];
    prepare?: (test: TestDefinition) => Promise<TestDefinition> | TestDefinition;
    captures?: Record<string, string>;
};
declare const tests: TestDefinition[];
export declare const testsByMethod: Record<string, any[]>;
export declare const getTests: any[];
export declare const postTests: any[];
export declare const putTests: any[];
export declare const patchTests: any[];
export declare const deleteTests: any[];
export default tests;
//# sourceMappingURL=definitions.d.ts.map