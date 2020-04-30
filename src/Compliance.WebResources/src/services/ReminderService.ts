import { injectable } from "inversify";
import "reflect-metadata";
import { IReminderService } from ".././interfaces";

@injectable()
export class ReminderService implements IReminderService {
}