export class StringHelper {
    public static isNullOrWhiteSpace(string: string): boolean {
        return string === null || /^\s*$/.exec(string) !== null;
    }

    // Format Guid without brackets and to lower case
    public static formatGuid(guid: string): string {
        const regex = new RegExp("^{(.*?)}$");
        const result = regex.exec(guid);

        if (result) {
            return result[1].toLowerCase();
        }
        return guid;
    }
}
