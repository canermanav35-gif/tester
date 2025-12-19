type FixtureMap = Record<string, any>;
export declare function getFixtures(): FixtureMap;
export declare function setFixture(key: string, value: any): void;
export declare function replacePlaceholders(value: any): any;
export declare function normalizeWithFixtures({ url, data, params }: {
    url: string;
    data?: any;
    params?: any;
}, opts?: {
    skipPathRewrite?: boolean;
}): {
    url: string;
    data: any;
    params: any;
};
export declare function captureFixturesFrom(body: any, capture?: Record<string, string>): void;
export declare function captureAllIds(body: any): void;
export {};
//# sourceMappingURL=fixtures.d.ts.map