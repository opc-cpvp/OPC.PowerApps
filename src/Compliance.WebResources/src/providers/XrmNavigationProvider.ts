import { injectable } from "inversify";

@injectable()
export class XrmNavigationProvider implements Xrm.Navigation {
    navigateTo(pageInput: Xrm.PageInput, navigationOptions: Xrm.NavigationOptions): Promise<undefined> {
        return Xrm.Navigation.navigateTo(pageInput, navigationOptions);
    }
    openAlertDialog(alertStrings: Xrm.AlertStrings, alertOptions?: Xrm.SizeOptions): Promise<undefined> {
        return Xrm.Navigation.openAlertDialog(alertStrings, alertOptions);
    }
    openConfirmDialog(confirmStrings: Xrm.ConfirmStrings, confirmOptions?: Xrm.SizeOptions): Promise<Xrm.ConfirmDialogResult> {
        return Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions);
    }
    openErrorDialog(errorOptions: Xrm.ErrorOptions): Promise<undefined> {
        return this.openErrorDialog(errorOptions);
    }
    openFile(file: Xrm.File, openFileOptions?: Xrm.OpenFileOptions): void {
        Xrm.Navigation.openFile(file, openFileOptions);
    }
    openForm(entityFormOptions: Xrm.EntityFormOptions, formParameters?: any): Xrm.Then<Xrm.OpenFormResult> {
        return Xrm.Navigation.openForm(entityFormOptions, formParameters);
    }
    openUrl(url: string, openUrlOptions: Xrm.SizeOptions): void {
        Xrm.Navigation.openUrl(url, openUrlOptions);
    }
    openWebResource(webResourceName: string, windowOptions?: Xrm.WindowOptions, data?: string): void {
        Xrm.Navigation.openWebResource(webResourceName, windowOptions);
    }
}

//export class XrmNavigationProvider2 {
//    public navigation: Xrm.Navigation;
//}
