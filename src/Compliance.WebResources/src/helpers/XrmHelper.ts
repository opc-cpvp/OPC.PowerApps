﻿// This somehow worked for tests, but could not get it working with webpack.
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
    static toggle<T extends Xrm.Attribute<any>>(control: Xrm.Control<T>, state: boolean, withReset?: boolean) {
        state ? XrmHelper.toggleOn(control, withReset) : XrmHelper.toggleOff(control)
    }

    static toggleOff<T extends Xrm.Attribute<any>>(control: Xrm.Control<T>): void {
        control.setVisible(false);
        control.setDisabled(true);
        control.getAttribute().setValue();
    }

    static toggleOn<T extends Xrm.Attribute<any>>(control: Xrm.Control<T>, withReset?: boolean): void {
        // If withReset means that if its same visible value, reset before turning on
        if (withReset && control.getVisible()) control.getAttribute().setValue();
        control.setVisible(true);
        control.setDisabled(false);
    }

    //TODO: Add a method to Clear notifications on the form?
}