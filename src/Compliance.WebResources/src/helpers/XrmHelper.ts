export class XrmHelper {
    private static readonly globalFormNotificationId: string = "opc_globalformnotification";

    public static toggle(baseControl: Xrm.BaseControl, state: boolean, withReset?: boolean) {
        state ? XrmHelper.toggleOn(baseControl, withReset) : XrmHelper.toggleOff(baseControl);
    }

    public static toggleOff(baseControl: Xrm.BaseControl): void {
        baseControl.setVisible(false);

        const control = (<Xrm.Control<Xrm.Attribute<any>>>baseControl);

        if (!control.setDisabled)
            return;

        control.setDisabled(true);

        if (!control.getAttribute)
            return;

        const attr = control.getAttribute();
        attr.setValue();
        attr.setRequiredLevel("none");
    }

    public static toggleOn(baseControl: Xrm.BaseControl, withReset?: boolean): void {
        const control = (<Xrm.Control<Xrm.Attribute<any>>>baseControl);
        if (control.getAttribute) {
            // If withReset means that if its same visible value, reset before turning on
            if (withReset && baseControl.getVisible()) control.getAttribute().setValue();
        }

        baseControl.setVisible(true);

        if (!control.setDisabled)
            return;

        control.setDisabled(false);
    }

    public static setNotification(ctrlOrAttr: Xrm.BaseControl | Xrm.Attribute<any>, message: string, level: Xrm.NotificationLevel = "ERROR") {
        const notificationid = ctrlOrAttr.getName();
        const setNotificationOnControl = (control: Xrm.BaseControl) => {
            // PCFs don't have setNotification or clearNotification functions
            if (level == "ERROR" && control.setNotification) control.setNotification(message, notificationid);
            control.getParent()?.getParent()?.getParent()?.setFormNotification(message, level, notificationid)
        }

        if ((ctrlOrAttr as Xrm.Attribute<any>).controls) {
            (ctrlOrAttr as Xrm.Attribute<any>).controls.forEach(c => setNotificationOnControl(c));
        } else {
            setNotificationOnControl(ctrlOrAttr as Xrm.BaseControl);
        }
    }

    public static setFormNotification(context: Xrm.PageBase<Xrm.AttributeCollectionBase, Xrm.TabCollectionBase, Xrm.ControlCollectionBase>, notificationlevel: Xrm.NotificationLevel, message: string): void {
        context.ui.setFormNotification(message, notificationlevel, XrmHelper.globalFormNotificationId)
    }

    public static clearNotification(ctrlOrAttr: Xrm.BaseControl | Xrm.Attribute<any>): void {
        const notificationid = ctrlOrAttr.getName();
        const clearNotificationOnControl = (control: Xrm.BaseControl) => {
            // PCFs don't have setNotification or clearNotification functions 
            if (control.clearNotification) control.clearNotification(notificationid);
            control.getParent()?.getParent()?.getParent()?.clearFormNotification(notificationid);
        }
        if ((ctrlOrAttr as Xrm.Attribute<any>).controls) {
            (ctrlOrAttr as Xrm.Attribute<any>).controls.forEach(c => clearNotificationOnControl(c));
        } else {
            clearNotificationOnControl(ctrlOrAttr as Xrm.BaseControl);
        }
    }

    public static clearAllNotifications(context: Xrm.PageBase<Xrm.AttributeCollectionBase, Xrm.TabCollectionBase, Xrm.ControlCollectionBase>): void {
        context.ui.controls.forEach(p => XrmHelper.clearNotification(p));
        context.ui.clearFormNotification(XrmHelper.globalFormNotificationId);
    }
}