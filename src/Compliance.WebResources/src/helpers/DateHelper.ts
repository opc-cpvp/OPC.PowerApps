export class DateHelper {
    public static isISODate(dateString: string): boolean {
        return /^\d{4}-\d{2}-\d{2}$/.exec(dateString) !== null;
    }

    public static getDateDifferenceInDays(date1: Date, date2: Date): number {
        return (date1.valueOf() - date2.valueOf()) / (1000 * 60 * 60 * 24);
    }

    public static subtractDaysFromDate(date: Date, days: number): Date {
        return new Date(date.valueOf() - days * 24 * 60 * 60 * 1000);
    }

    public static addDaysToDate(date: Date, days: number): Date {
        return new Date(date.valueOf() + days * 24 * 60 * 60 * 1000);
    }
}
