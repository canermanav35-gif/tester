type SendParams = {
    method?: string;
    url: string;
    data?: any;
    params?: any;
    user?: string;
    headers?: Record<string, any>;
};
export declare function send({ method, url, data, params, user, headers: extraHeaders, }: SendParams): Promise<any>;
export {};
//# sourceMappingURL=httpClient.d.ts.map