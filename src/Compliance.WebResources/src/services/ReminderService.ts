import { injectable } from "inversify";
import "reflect-metadata";
import { IReminderService } from ".././interfaces";

@injectable()
export class ReminderService implements IReminderService {
    getReminder(id: string): opc_reminder {
        console.log("im returning a nice reminder");
        return null;
    }
}