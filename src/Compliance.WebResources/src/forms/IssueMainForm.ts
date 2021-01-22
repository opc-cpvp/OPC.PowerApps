import { injectable, inject } from "inversify";
import "reflect-metadata";
import { IPowerForm, IComplaintService, IContactService, ComplaintWithRelationships } from "../interfaces";
import { XrmHelper } from "../helpers/XrmHelper";
import { AllegationType } from "../enums";

// @see https://github.com/typescript-eslint/typescript-eslint/issues/2573
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export namespace Issue.Forms {
    @injectable()
    export class MainForm implements IPowerForm<Form.opc_issue.Main.Information> {
        private _complaintService: IComplaintService;
        private _contactService: IContactService;

        private _complaint: ComplaintWithRelationships;

        constructor(
            @inject(nameof<IComplaintService>()) complaintService: IComplaintService,
            @inject(nameof<IContactService>()) contactService: IContactService
        ) {
            this._complaintService = complaintService;
            this._contactService = contactService;
        }

        /**
         * Handle the form OnLoad event.
         *
         * @event OnLoad
         */
        public initializeComponents(initializationContext: Xrm.ExecutionContext<Form.opc_issue.Main.Information, any>): void {
            const formContext = initializationContext.getFormContext() as Form.opc_issue.Main.Information;

            // Register handlers
            formContext.getAttribute("opc_allegationtypeid").addOnChange(x => this.allegationtype_OnChange(x));
            formContext.getAttribute("opc_allegationtypeid").fireOnChange();

            // TODO: Move function call to contact_preSearch.
            this.setComplaint(formContext).catch(e => console.error("error setting complaint", e));

            formContext.getControl("opc_contact").addPreSearch(() => this.contact_preSearch(formContext));
        }

        private async setComplaint(context: Form.opc_issue.Main.Information): Promise<void> {
            const complaintValue = context.getAttribute("opc_complaintid").getValue();

            if (!complaintValue) {
                return;
            }

            const complaintId = complaintValue[0].id;

            this._complaint = await this._complaintService.getComplaintWithRelationships(complaintId);
        }

        private allegationtype_OnChange(context: Xrm.ExecutionContext<Xrm.LookupAttribute<"opc_allegationtype">, undefined>) {
            const formContext = context.getFormContext() as Form.opc_issue.Main.Information;

            const allegationType = formContext.getAttribute("opc_allegationtypeid").getValue();
            const hasAllegationType = allegationType && allegationType.length > 0;

            let isAllegationTypeAccess = false;
            if (hasAllegationType) {
                const allegationTypeId = allegationType[0].id;
                isAllegationTypeAccess = allegationTypeId === AllegationType.Access;
            }

            XrmHelper.toggle(formContext.getControl("opc_accessrequestnumber"), isAllegationTypeAccess);
            XrmHelper.toggle(formContext.getControl("opc_contact"), isAllegationTypeAccess);
            XrmHelper.toggle(formContext.getControl("subgrid_accessrequestdocuments"), isAllegationTypeAccess);
        }

        private contact_preSearch(formContext: Form.opc_issue.Main.Information) {
            formContext
                .getControl("opc_contact")
                .addCustomFilter(this._contactService.getRespondentContactsFilter(this._complaint.opc_accountid.accountid));
        }
    }
}
