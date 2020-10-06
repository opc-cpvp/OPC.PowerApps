import { injectable, inject } from "inversify";
import { IContactService, IQueryHandler, ExtendedXrmPageBase } from "../../interfaces";

@injectable()
export class CheckDuplicatesQueryHandler implements IQueryHandler<boolean> {
    private readonly _contactService: IContactService;

    constructor(@inject(nameof<IContactService>()) contactService: IContactService) {
        this._contactService = contactService;
    }

    public async executeAsync<TForm extends ExtendedXrmPageBase>(field: string, context: TForm): Promise<boolean> {
        const contact = context.getAttribute(field);

        // Check if there is any value for the given field
        if (contact?.getValue()?.length > 0) {
            const fetchedContact = await this._contactService.getContact(contact.getValue()[0].id);
            const potentialDuplicates = await this._contactService.getPotentialDuplicates(fetchedContact);
            return potentialDuplicates.length > 0;
        }

        return false;
    }
}
