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
        public async initializeComponents(
            initializationContext: Xrm.ExecutionContext<Form.opc_issue.Main.Information, any>
        ): Promise<void> {
            const formContext = initializationContext.getFormContext() as Form.opc_issue.Main.Information;

            // Register handlers
            formContext.getAttribute("opc_allegationtypeid").addOnChange(x => this.allegationtype_OnChange(x));
            formContext.getAttribute("opc_allegationtypeid").fireOnChange();

            // TODO: Move function call to contact_preSearch. (GFG: we may not want this anymore as the value is required in multiple places)
            await this.setComplaint(formContext).catch(e => console.error("error setting complaint", e));

            formContext.getControl("opc_contact").addPreSearch(() => this.contact_preSearch(formContext));

            this.setProvisionsView(formContext);
        }

        /**
         * Set the provision view according to the legislation of the parent complaint
         */
        private setProvisionsView(context: Form.opc_issue.Main.Information): void {
            if (this._complaint) {
                const provisionsGrid = context.getControl("subgrid_provisions") as Xrm.SubGridControl<"">; // TODO: put grid name once entities exist
                const viewSelector = provisionsGrid.getViewSelector();

                const legislation = this._complaint.opc_legislation?.opc_acronym;

                // Not sure if a better way can be used to prevent hardcoding these values
                let provisionsViewId = "";
                let provisionsViewName = "";
                if (legislation === "PA") {
                    provisionsViewId = "ceae04a7-f467-eb11-a812-000d3aff1915";
                    provisionsViewName = "Active PA Provisions";
                } else if (legislation === "PIPEDA") {
                    provisionsViewId = "a951b12e-206a-eb11-a812-000d3aff4254";
                    provisionsViewName = "Active PIPEDA Provisions";
                }

                if (provisionsViewId !== "" && provisionsViewName !== "") {
                    const ProjectTemplateView = {
                        entityType: "1039", // SavedQuery
                        id: provisionsViewId,
                        name: provisionsViewName
                    };

                    viewSelector.setCurrentView(ProjectTemplateView);
                }
            }
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
