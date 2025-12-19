export default leavesTest;
declare namespace leavesTest {
    let name: string;
    let user: string;
    let method: string;
    let url: string;
    let assertions: ({
        path: string;
        type: string;
        expected: boolean;
        message: string;
    } | {
        path: string;
        type: string;
        message: string;
        expected?: never;
    } | {
        path: string;
        type: string;
        expected: number[];
        message: string;
    } | {
        path: string;
        type: string;
        expected: number;
        message: string;
    })[];
}
//# sourceMappingURL=leaves.d.ts.map