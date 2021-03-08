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

        // Changes the style of the BPF Stage "Flyouts", the BPF Stage "Docks" and the possible Multiselect Option Sets in them.
        // We are making the Flyouts and Docks larger so that the labels and the data, especially the multiselect, are more easy to read.
        // We are also modifying them so that the dropdown menus can overflow and be completely visible.
        const documentMutationObserver = new window.MutationObserver(mutations => {
            mutations.forEach(() => {
                // BPF Stage Flyout
                const stageFlyout = window.parent.document.querySelector(
                    '[id^="MscrmControls.Containers.ProcessStageControl-processHeaderStageFlyout_"]'
                );
                const stageFlyoutContainer = window.parent.document.querySelector(
                    '[id^="MscrmControls.Containers.ProcessStageControl-processHeaderStageFlyoutContainer_"]'
                );
                const stageFlyoutItems = window.parent.document.querySelector(
                    '[id^="MscrmControls.Containers.ProcessStageControl-processHeaderStageFlyoutItems_"]'
                );

                // BPF Stage Dock
                const stageDockContainer = window.parent.document.querySelector(
                    '[id="MscrmControls.Containers.ProcessStageControl-stageDockContainer"]'
                );
                const stageDockInnerContainer = window.parent.document.querySelector(
                    '[id="MscrmControls.Containers.ProcessStageControl-stageDockInnerContainer"]'
                );
                const stageDockColumnContainer = window.parent.document.querySelector(
                    '[id^="MscrmControls.Containers.ProcessStageControl-stageDockColumnContainer_"]'
                );

                // If it is a BPF Stage Flyout
                if (stageFlyout && stageFlyoutContainer && stageFlyoutItems) {
                    stageFlyout.setAttribute("style", "overflow:visible");
                    stageFlyoutContainer.setAttribute("style", "width:550px");
                    stageFlyoutItems.setAttribute("style", "overflow:visible; max-height:none");
                }

                // If it is a BPF Stage Dock
                if (stageDockContainer && stageDockColumnContainer) {
                    stageDockContainer.setAttribute("style", "width:550px; max-width:550px");
                    stageDockColumnContainer.setAttribute("style", "overflow:visible");

                    // The Stage Dock behavior is different than the Stage Flyout.
                    // Once it is displayed, the Stage Dock Container stays the same until you manually close it.
                    // This means that the observer doesn't get triggered when the dock is already open and you switch the stage because the aria-controls attribute had already been modified.
                    // Instead we are observing the Inner Container element that got created with the dock for any changes in it and then put the overflow back to visible.
                    stageDockInnerContainerMutationObserver.observe(stageDockInnerContainer, { childList: true });
                }
            });
        });

        const stageDockInnerContainerMutationObserver = new window.MutationObserver(mutations => {
            mutations.forEach(() => {
                const stageDockColumnContainer = window.parent.document.querySelector(
                    '[id^="MscrmControls.Containers.ProcessStageControl-stageDockColumnContainer_"]'
                );

                if (stageDockColumnContainer) {
                    stageDockColumnContainer.setAttribute("style", "overflow:visible");
                }
            });
        });

        documentMutationObserver.observe(window.parent.document, {
            attributes: true,
            attributeFilter: ["aria-controls"],
            subtree: true
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
