import { injectable, inject } from "inversify";
import { ICommandHandler, ExtendedXrmPageBase, IAllegationTypeService, IAllegationService } from "../../interfaces";

@injectable()
export class OpenIssueQuickCreateFromAllegationFormCommandHandler implements ICommandHandler<ExtendedXrmPageBase> {
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
        const allegationId = formContext.data.entity.getId();
        const accessRequestNumber = formContext.getAttribute("opc_referencenumber").getValue();
        const allegationTypeId = formContext.getAttribute("opc_allegationtypeid").getValue()[0].id;
        const allegationType = await this._allegationTypeService.getAllegationType(allegationTypeId);

        if (accessRequestNumber) {
            this._issueParameters.opc_accessrequestnumber = accessRequestNumber;
        }

        this._issueParameters.opc_allegationtypeid = allegationTypeId;
        this._issueParameters.opc_allegationtypeidname = allegationType.opc_name;
        this._issueParameters.opc_allegationid = allegationId;
        this._issueParameters.opc_complaintid = formContext.getAttribute("opc_complaintid").getValue()[0].id;

        const entityFormOptions = {
            entityName: "opc_issue",
            useQuickCreateForm: true
        };

        try {
            this._xrmNavigation.openForm(entityFormOptions, this._issueParameters).then(result => {
                const issueId = result.savedEntityReference[0].id;
                this._allegationService.updateAllegation(this._issueParameters.opc_allegationid, issueId);
            });
        } catch (err) {
            console.error(err);
        }
    }
}
