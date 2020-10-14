export class XrmFormNotificationMock {
    message: string;
    level: Xrm.NotificationLevel;
    uniqueId: string;

    constructor(message: string, level: Xrm.NotificationLevel, uniqueId: string) {
        this.message = message;
        this.level = level;
        this.uniqueId = uniqueId;
    }
}
