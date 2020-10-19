import { XrmThenMock } from "./XrmThenMock";

export class XrmNavigationMock implements Xrm.Navigation {
    navigateTo(pageInput: Xrm.PageInput, navigationOptions: Xrm.NavigationOptions): Promise<undefined> {
        return new Promise<undefined>(() => {});
    }
    openAlertDialog(alertStrings: Xrm.AlertStrings, alertOptions?: Xrm.SizeOptions): Promise<undefined> {
        throw new Error("Method not implemented.");
    }
    openConfirmDialog(confirmStrings: Xrm.ConfirmStrings, confirmOptions?: Xrm.SizeOptions): Promise<Xrm.ConfirmDialogResult> {
        return new Promise<Xrm.ConfirmDialogResult>(() => {});
    }
    openErrorDialog(errorOptions: Xrm.ErrorOptions): Promise<undefined> {
        throw new Error("Method not implemented.");
    }
    openFile(file: Xrm.File, openFileOptions?: Xrm.OpenFileOptions): void {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    openForm(entityFormOptions: Xrm.EntityFormOptions, formParameters?: any): Xrm.Then<Xrm.OpenFormResult> {
        return new XrmThenMock();
    }
    openUrl(url: string, openUrlOptions: Xrm.SizeOptions): void {
        throw new Error("Method not implemented.");
    }
    openWebResource(webResourceName: string, windowOptions?: Xrm.WindowOptions, data?: string): void {
        throw new Error("Method not implemented.");
    }
}
