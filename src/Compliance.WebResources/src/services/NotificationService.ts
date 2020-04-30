import { injectable } from "inversify";
import "reflect-metadata";
import { INotificationService } from ".././interfaces";

@injectable()
export class NotificationService implements INotificationService {
    markAsRead(id: string): void {
        XrmQuery.update(x => x.opc_notifications, id, { "statuscode": opc_notification_statuscode.Read }).execute(x => { });
    }
}