// This somehow worked for tests, but could not get it working with webpack.
//declare namespace Xrm {
//        class Control<T> {
//            on() : void;
//            off() : void;
//        }
//    }

//    Xrm.Control.prototype.on = function () {
//        this.setVisible(true);
//        this.setDisabled(false);
//    }

//    Xrm.Control.prototype.off = function () {
//        this.setVisible(false);
//        this.setDisabled(true);
//        this.getAttribute().setValue();
//    }


export class XrmHelper {
    static toggle(baseControl: Xrm.BaseControl, state: boolean, withReset?: boolean) {
        state ? XrmHelper.toggleOn(baseControl, withReset) : XrmHelper.toggleOff(baseControl);
    }

    static toggleOff(baseControl: Xrm.BaseControl): void {
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

    static toggleOn(baseControl: Xrm.BaseControl, withReset?: boolean): void {
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

    //TODO: Add a method to Clear notifications on the form?
}
