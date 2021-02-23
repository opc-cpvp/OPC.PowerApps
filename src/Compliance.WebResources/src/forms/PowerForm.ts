import { injectable } from "inversify";
import { IPowerForm } from "../interfaces";

@injectable()
export abstract class PowerForm<TForm extends Xrm.PageBase<Xrm.AttributeCollectionBase, Xrm.TabCollectionBase, Xrm.ControlCollectionBase>>
    implements IPowerForm<TForm> {
    public initializeComponents(context: Xrm.ExecutionContext<TForm, any>): void {
        // This is to fix the issue of parent data not being translated when creating a child record from a lookup field.
        // Deprecated but can't make it work yet. https://docs.microsoft.com/en-us/power-platform/important-changes-coming
        const queryStringParam = context.getContext().getQueryStringParameters();

        // Check if parentrecordid in not null or undefined.
        // Using optionnal chaining to return undefined instead of an error if queryStringParam is undefined.
        if (queryStringParam?.parentrecordid) {
            context.getFormContext().ui.controls.forEach(ctrl => {
                // If the id in the lookup is the same as the one in the QueryString Parameters, change it's displayed value to the translated one.
                if (
                    ctrl.getControlType() === "lookup" &&
                    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                    ctrl.getAttribute().getValue()[0].id === `{${queryStringParam.parentrecordid.toUpperCase()}}`
                ) {
                    const attribute = ctrl.getAttribute() as Xrm.Attribute<any>;
                    const attributeValue = attribute.getValue();

                    attributeValue[0].name = queryStringParam.parentrecordname;
                    attribute.setValue(attributeValue);
                }
            });
        }

        // Automatically wire-up save event dispatching to iframes
        context.getFormContext().data.entity.addOnSave(ctx => this.handleIFrameSaves(ctx));

        context.getFormContext().ui.controls.forEach(ctrl => {
            if (!["webresource", "iframe"].find(c => c === ctrl.getControlType())) {
                return;
            }

            this.waitForWebResourceReady(ctrl, () => {
                const iframe = ctrl.getObject() as HTMLIFrameElement;
                if (iframe) {
                    (iframe.contentDocument || iframe.contentWindow.document).addEventListener("entity-save-completed", e => {
                        context
                            .getFormContext()
                            .data.refresh()
                            .catch(error => {
                                console.error(error);
                            });
                    });
                }
            });
        });
    }

    private handleIFrameSaves(ctx: Xrm.SaveEventContext<Xrm.PageEntity<Xrm.AttributeCollectionBase>>): void {
        // Find all iframes and dispatch save events
        ctx.getFormContext().ui.controls.forEach(ctrl => {
            // If control is a web resource or an iframe (basically same thing?)
            const ctype = ctrl.getControlType();
            if (ctype === "webresource" || ctype === "iframe") {
                // Retrieve the iframe and dispatch the custom save event
                const iframe = ctrl.getObject() as HTMLIFrameElement;
                if (iframe) {
                    // Note if iframe is not loaded, its not going to get in here.
                    const event = new Event("entity-save");
                    (iframe.contentDocument || iframe.contentWindow.document).dispatchEvent(event);
                }
            }
        });
    }

    private waitForWebResourceReady(ctrl: Xrm.AnyControl, functionRef: () => any): void {
        if (
            ctrl.getObject()?.contentDocument?.readyState !== "complete" ||
            ctrl.getObject()?.contentWindow?.location?.href?.indexOf("about:blank") > -1
        ) {
            setTimeout(() => {
                this.waitForWebResourceReady(ctrl, functionRef);
            }, 20);
            return;
        }

        functionRef();
    }
}
