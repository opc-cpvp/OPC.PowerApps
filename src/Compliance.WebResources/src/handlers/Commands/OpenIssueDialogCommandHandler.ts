import { injectable, inject } from "inversify";
import { ICommandHandler, ExtendedXrmPageBase, IAllegationTypeService } from "../../interfaces";

@injectable()
export class OpenIssueDialogCommandHandler implements ICommandHandler<ExtendedXrmPageBase> {
    private _xrmNavigation: Xrm.Navigation;
    private _allegationTypeService: IAllegationTypeService;

    constructor(
        @inject(nameof<Xrm.Navigation>()) xrmNavigation: Xrm.Navigation,
        @inject(nameof<IAllegationTypeService>()) allegationTypeService: IAllegationTypeService
    ) {
        this._xrmNavigation = xrmNavigation;
        this._allegationTypeService = allegationTypeService;
    }

    async execute<TForm extends ExtendedXrmPageBase>(formContext: TForm): Promise<void> {
        const parameters: { [key: string]: string } = {};

        if (formContext.data.entity.getEntityName() === "opc_allegation") {
            const allegationTypeId = formContext.getAttribute("opc_allegationtypeid").getValue()[0].id;
            const allegationType = await this._allegationTypeService.getAllegationType(allegationTypeId);

            parameters.opc_allegationtypeid = allegationTypeId;
            parameters.opc_allegationtypeidname = allegationType.opc_name;
        }

        this._xrmNavigation
            .navigateTo(
                {
                    pageType: "entityrecord",
                    entityName: "opc_issue",
                    data: parameters
                },
                {
                    target: Xrm.NavigationOptionsTarget.Dialog,
                    position: Xrm.NavigationOptionsPosition.Center,
                    width: { value: 75, unit: "%" },
                    height: { value: 75, unit: "%" }
                }
            )
            .catch(() => {
                // TODO catch error
            });
    }
}
