import { TemplateDialog } from './TemplateDialog';

export class TemplateDialogPage {
    private static _templateDialog: TemplateDialog;

    public static page_OnLoad(): void {
        const placeholder = <HTMLDivElement>document.getElementById("dialog");
        this._templateDialog = new TemplateDialog(placeholder);

        this._templateDialog.initializeDialog().then(() => {
            //const confirmButton = document.getElementById("template-comfirm");
            const cancelButton = document.getElementById("template-cancel");

            //confirmButton.addEventListener("submit", () => this._templateDialog.generateTemplate_onClick());
            cancelButton.addEventListener("click", () => this.closePage());
            document.addEventListener("submit", x => {
                x.preventDefault();
                this._templateDialog.generateTemplate_onClick();
            });
        });
    }

    // TODO: Find a prettier way to do this.
    public static closePage(): void {
        const button = <HTMLButtonElement>parent.document.getElementById("defaultDialogChromeCloseIconButton");
        button.click();
    }
}
