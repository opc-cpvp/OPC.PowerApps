import { injectable } from "inversify";
import "reflect-metadata";
import { IContactService } from ".././interfaces";

@injectable()
export class ContactService implements IContactService {
    getContact(id: string): Contact {
        console.log("im returning a nice contact");
        return null;
    }
}