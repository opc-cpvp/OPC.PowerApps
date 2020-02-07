import { injectable } from "inversify";
import "reflect-metadata";
import { INotificationService } from ".././interfaces";

@injectable()
export class NotificationService implements INotificationService {
    getNotification(id: string): opc_notification {
        console.log("im returning a nice notification");
        return null;
    }

    markAsRead(id: string): void {
        XrmQuery.update(x => x.opc_notifications, id, { "statuscode": opc_notification_statuscode.Read }).execute(x => { });
    }
}