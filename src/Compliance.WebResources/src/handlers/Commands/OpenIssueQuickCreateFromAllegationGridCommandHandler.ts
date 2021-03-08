import { injectable, inject } from "inversify";
import { ICommandHandler, ExtendedXrmPageBase, IAllegationTypeService, IAllegationService } from "../../interfaces";

@injectable()
export class OpenIssueQuickCreateFromAllegationGridCommandHandler implements ICommandHandler<ExtendedXrmPageBase> {
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
        this._issueParameters.opc_complaintid = formContext.data.entity.getId();

        const rows = formContext.getControl("subgrid_allegations").getGrid().getSelectedRows();

        const acceptableAllegations = this.getAcceptableAllegationRows(rows);

        // If there's only one allegation so we can prefill the Issue form
        if (acceptableAllegations?.length === 1) {
            await this.setAllegationParameters(acceptableAllegations[0]);
        }

        const entityFormOptions = {
            entityName: "opc_issue",
            useQuickCreateForm: true
        };

        try {
            this._xrmNavigation.openForm(entityFormOptions, this._issueParameters).then(result => {
                const issueId = result.savedEntityReference[0].id;
                acceptableAllegations.forEach(x => this._allegationService.updateAllegation(x.data.entity.getId(), issueId));
            });
        } catch (err) {
            console.error(err);
        }
    }

    private async setAllegationParameters(gridRow: Xrm.GridRow<string>): Promise<void> {
        const allegationId = gridRow.data.getEntity().getId();
        const allegation = await this._allegationService.getAllegation(allegationId);

        const accessRequestNumber = allegation.opc_referencenumber;
        if (accessRequestNumber) {
            this._issueParameters.opc_accessrequestnumber = accessRequestNumber;
        }
        this._issueParameters.opc_allegationtypeid = allegation.opc_allegationtypeid_guid;
        const allegationType = await this._allegationTypeService.getAllegationType(allegation.opc_allegationtypeid_guid);
        this._issueParameters.opc_allegationtypeidname = allegationType.opc_name;
        this._issueParameters.opc_allegationid = allegationId;
    }

    private getAcceptableAllegationRows(rows: Xrm.Collection<Xrm.GridRow<string>>): Xrm.GridRow<string>[] {
        const acceptableAllegationRows = rows.get((attribute, index) => {
            const disposition = attribute.getData().getEntity().attributes.getByName("opc_disposition").getValue();

            if (disposition && disposition.toString() === opc_allegationdisposition.Acceptable.toString()) {
                return true;
            }
            return false;
        });
        return acceptableAllegationRows;
    }
}
