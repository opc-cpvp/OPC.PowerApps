import { injectable, inject } from "inversify";
import { ICommandHandler, ExtendedXrmPageBase, IAllegationTypeService, IAllegationService } from "../../interfaces";

@injectable()
export class OpenIssueDialogCommandHandler implements ICommandHandler<ExtendedXrmPageBase> {
    private _xrmNavigation: Xrm.Navigation;
    private _allegationService: IAllegationService;
    private _allegationTypeService: IAllegationTypeService;
    private _issueParameters: { [key: string]: string };

    constructor(
        @inject(nameof<Xrm.Navigation>()) xrmNavigation: Xrm.Navigation,
        @inject(nameof<IAllegationTypeService>()) allegationTypeService: IAllegationTypeService,
        @inject(nameof<IAllegationService>()) allegationService: IAllegationService
    ) {
        this._xrmNavigation = xrmNavigation;
        this._allegationTypeService = allegationTypeService;
        this._allegationService = allegationService;
        this._issueParameters = {};
    }

    async execute<TForm extends ExtendedXrmPageBase>(formContext: TForm): Promise<void> {
        let acceptableAllegations: Xrm.GridRow<string>[];

        if (formContext.data.entity.getEntityName() === "opc_complaint") {
            this._issueParameters.opc_complaintid = formContext.data.entity.getId();

            const rows = formContext.getControl("subgrid_allegations").getGrid().getSelectedRows();

            acceptableAllegations = rows.get((attribute, index) => {
                const disposition = attribute.getData().getEntity().attributes.getByName("opc_disposition").getValue();

                // Only consider selected allegations with 'Acceptable' dispositions
                if (disposition && disposition.toString() === opc_allegationdisposition.Acceptable.toString()) {
                    return true;
                }

                return false;
            });
        }

        if (formContext.data.entity.getEntityName() === "opc_allegation") {
            const allegationId = formContext.data.entity.getId();
            await this.setParamsInIssueForm(allegationId, formContext);

            this._issueParameters.opc_complaintid = formContext.getAttribute("opc_complaintid").getValue()[0].id;
        }
        // There's only one allegation so we can prefill the Issue form
        else if (acceptableAllegations?.length === 1) {
            const allegationId = acceptableAllegations[0].data.getEntity().getId();
            await this.setParamsInIssueForm(allegationId);
        }

        const entityFormOptions = {
            entityName: "opc_issue",
            useQuickCreateForm: true
        };

        try {
            this._xrmNavigation.openForm(entityFormOptions, this._issueParameters).then(result => {
                const issueId = result.savedEntityReference[0].id;
                // link the new issue with the selected allegations (N:N)
                if (acceptableAllegations) {
                    acceptableAllegations.forEach(x => this._allegationService.updateAllegation(x.data.entity.getId(), issueId));
                } else {
                    this._allegationService.updateAllegation(this._issueParameters.opc_allegationid, issueId);
                }
            });
        } catch (err) {
            console.error(err);
        }
    }

    private async setParamsInIssueForm(allegationId: string, formContext?: ExtendedXrmPageBase): Promise<void> {
        let accessRequestNumber: string;
        let allegationTypeId: string;

        if (formContext && formContext.data.entity.getEntityName() === "opc_allegation") {
            accessRequestNumber = formContext.getAttribute("opc_referencenumber").getValue();
            allegationTypeId = formContext.getAttribute("opc_allegationtypeid").getValue()[0].id;
        } else {
            const allegation = await this._allegationService.getAllegation(allegationId);
            accessRequestNumber = allegation.opc_referencenumber;
            allegationTypeId = allegation.opc_allegationtypeid_guid;
        }

        const allegationType = await this._allegationTypeService.getAllegationType(allegationTypeId);

        if (accessRequestNumber) {
            this._issueParameters.opc_accessrequestnumber = accessRequestNumber;
        }

        this._issueParameters.opc_allegationtypeid = allegationTypeId;
        this._issueParameters.opc_allegationtypeidname = allegationType.opc_name;
        this._issueParameters.opc_allegationid = allegationId;
    }
}
