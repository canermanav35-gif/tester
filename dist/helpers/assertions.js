export function getByPath(obj, path) {
    if (!path || path === '.')
        return obj;
    return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}
export function runAssertion(body, assertion) {
    const { path, type, expected, message } = assertion;
    const value = getByPath(body, path);
    let ok = false;
    switch (type) {
        case 'exists':
            ok = value !== undefined;
            break;
        case 'notNull':
            ok = value !== undefined && value !== null;
            break;
        case 'equals':
            ok = value === expected;
            break;
        case 'in':
            ok = Array.isArray(expected) && expected.includes(value);
            break;
        case 'uuid': {
            const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
            ok = typeof value === 'string' && uuidRegex.test(value);
            break;
        }
        default:
            return { ok: false, value, error: `Unsupported assertion type: ${type}` };
    }
    return {
        ok,
        value,
        error: ok ? null : message || `Assertion failed for path "${path}" of type "${type}"`,
    };
}
export function runAssertions(body, assertions = []) {
    return assertions.map((assertion) => runAssertion(body, assertion));
}
//# sourceMappingURL=assertions.js.map