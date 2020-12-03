export class StringHelper {
    public static isNullOrWhiteSpace(string: string): boolean {
        return string === null || /^\s*$/.exec(string) !== null;
    }
}
