import { injectable } from "inversify";
import "reflect-metadata";
import { IReminderService } from ".././interfaces";

@injectable()
export class ReminderService implements IReminderService {

    async hasAdditionalUsersToNotify(id: string): Promise<boolean> {
        if (!id) return false;

        const result = await XrmQuery.retrieveRelatedMultiple(x => x.opc_reminders, id,
            x => x.opc_reminders_users_additionaluserstonotify).select(x => [x.systemuserid]).top(1).promiseFirst();

        return result != null;
    }
}