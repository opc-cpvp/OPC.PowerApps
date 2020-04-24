import { injectable } from "inversify";
import "reflect-metadata";
import { IContactService } from ".././interfaces";

@injectable()
export class ContactService implements IContactService {
}

