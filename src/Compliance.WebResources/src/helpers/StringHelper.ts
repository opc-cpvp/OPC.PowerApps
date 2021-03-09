export class StringHelper {
    public static isNullOrWhiteSpace(string: string): boolean {
        return string === null || /^\s*$/.exec(string) !== null;
    }

    // Format Guid without brackets and to lower case
    public static formatGuid(guid: string): string {
        const regex = new RegExp("^{.*?}$");
        if (regex.test(guid)) {
            return guid.slice(1, guid.length - 1).toLowerCase();
        }
        return guid;
    }
}
