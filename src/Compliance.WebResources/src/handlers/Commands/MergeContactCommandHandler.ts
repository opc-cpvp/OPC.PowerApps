import { injectable, inject } from "inversify";
import { i18n } from "i18next";
import { IContactService, ICommandHandler, ExtendedXrmPageBase } from "../../interfaces";
import { ContactHelper } from "../../helpers/ContactHelper";
import { WindowHelper } from "../../helpers/WindowHelper";

@injectable()
export class MergeContactCommandHandler implements ICommandHandler {

    private readonly _i18n: i18n;
    private readonly _contactService: IContactService;
    private readonly _context: Xrm.context;

    constructor(
        @inject(nameof<i18n>()) i18n: i18n,
        @inject(nameof<IContactService>()) contactService: IContactService,
        @inject(nameof<Xrm.context>()) context: Xrm.context) {
        this._i18n = i18n;
        this._contactService = contactService;
        this._context = context;
    }

    public execute<TForm extends ExtendedXrmPageBase>(context: TForm, field: string): void {
        const contact = context.getAttribute(field);

        // Get the contact and merge if a potential duplicate is found
        if (contact && contact.getValue() && contact.getValue().length > 0) {
            this._contactService.getContact(contact.getValue()[0].id)
                .then(contact => this.mergeMostLikelyDuplicate(contact, field, context))
                .catch(x => console.log(this._i18n.t("contact:duplicate.error.error_fetching", { contactType: "complainant" })));
        }
    }

    private mergeMostLikelyDuplicate(contact: Contact_Result, field: string, context: ExtendedXrmPageBase): void {
        this._contactService.getPotentialDuplicates(contact)
            .then(duplicates => {
                // We have a duplicate or potential duplicate, trigger the merge
                if (duplicates.length > 0) {
                    // Sort the duplicates so we get the most likely duplicate as a first result
                    const mostLikelyDuplicate = ContactHelper.getMostLikelyDuplicate(contact, duplicates);
                    this.openDuplicateMergeWindow(contact.contactid, mostLikelyDuplicate.contactid, field, context);
                }
                else
                    context.ui.setFormNotification(this._i18n.t("contact:duplicate.error.no_potential_duplicate"), "WARNING", "TODO");
            });
    }

    private openDuplicateMergeWindow(contactId: string, potentialDuplicateId: string, field: string, context: ExtendedXrmPageBase): void {
        const url = this._context.getClientUrl() +
            `/_grid/cmds/dlg_merge.aspx?dType=1&iObjType=2&iTotal=2&sIds=${contactId};${potentialDuplicateId}`
        let mergeWindow = WindowHelper.openWindow(url, '_blank', 900, 700);

        // Refresh everything when the merging window is gone
        mergeWindow.addEventListener("unload", function (e) {
            context.getAttribute(field)?.fireOnChange();
            context.ui.refreshRibbon();
        });
    }
}