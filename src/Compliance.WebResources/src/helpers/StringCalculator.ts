import { DateHelper } from "./DateHelper";

export class StringCalculator {
    // Make a calculation with either dates or numbers received as strings.
    // Returns either a date or a number in the form of a string.
    public static calculate(firstValue: string, operator: string, secondValue: string): string {
        let result: string = null;

        const firstParsedValue: number | Date = StringCalculator.parseDateOrNumber(firstValue);
        const secondParsedValue: number | Date = StringCalculator.parseDateOrNumber(secondValue);

        if (firstParsedValue === null || secondParsedValue === null) {
            return result;
        }

        switch (operator) {
            case "-":
                if (firstParsedValue instanceof Date && secondParsedValue instanceof Date) {
                    result = DateHelper.getDateDifferenceInDays(new Date(firstParsedValue), new Date(secondParsedValue)).toString();
                } else if (firstParsedValue instanceof Date && typeof secondParsedValue === "number") {
                    result = DateHelper.subtractDaysFromDate(new Date(firstParsedValue), secondParsedValue).toISOString().split("T")[0];
                } else if (typeof firstParsedValue === "number" && typeof secondParsedValue === "number") {
                    result = (firstParsedValue - secondParsedValue).toString();
                }
                break;
            case "+":
                if (firstParsedValue instanceof Date && typeof secondParsedValue === "number") {
                    result = DateHelper.addDaysToDate(new Date(firstParsedValue), secondParsedValue).toISOString().split("T")[0];
                } else if (typeof firstParsedValue === "number" && typeof secondParsedValue === "number") {
                    result = (firstParsedValue + secondParsedValue).toString();
                }
                break;
            case "/":
                if (typeof firstParsedValue === "number" && typeof secondParsedValue === "number") {
                    result = (firstParsedValue / secondParsedValue).toString();
                }
                break;
            case "*":
                if (typeof firstParsedValue === "number" && typeof secondParsedValue === "number") {
                    result = (firstParsedValue * secondParsedValue).toString();
                }
                break;
            default:
                break;
        }

        return result;
    }

    private static parseDateOrNumber(value: string): number | Date {
        let parsedValue: number | Date;

        if (DateHelper.isISODate(value)) {
            parsedValue = new Date(value);
        } else if (!isNaN(Number.parseInt(value))) {
            parsedValue = Number.parseInt(value);
        } else {
            parsedValue = null;
        }

        return parsedValue;
    }
}
