import { XrmExecutionContextMock } from "./XrmExecutionContextMock";
import { INamedComponent } from "./INamedComponent";
import { XrmPageSectionMock } from "./XrmPageSectionMock";

export class XrmBaseControlMock implements Xrm.AnyControl, Xrm.BaseControl, INamedComponent {
    protected context: XrmExecutionContextMock<any, any>;
    private _type: Xrm.ControlType;
    private _isVisible: boolean;
    private _name: string;
    private _notifications: any[] = [];
    private _parentSection: Xrm.PageSection;

    constructor(executionContext: XrmExecutionContextMock<any, any>) {
        this.context = executionContext;
    }

    /* NEW MEMBERS TO HELP MOCKING */
    setControlType(type: Xrm.ControlType) {
        this._type = type;
    }
    setName(name: string): void {
        this._name = name;
    }
    getNotificationsLength(): number {
        return this._notifications.length;
    }
    setParentSection(section: Xrm.PageSection) {
        this._parentSection = section;
    }
    /* END OF NEW MEMBERS*/

    getControlType(): Xrm.ControlType {
        return this._type;
    }
    setFocus(): void {
    }
    getParent(): Xrm.PageSection {
        if (!this._parentSection) {
            const parentSection = new XrmPageSectionMock(this.context);
            parentSection.controls.collection.push(this);
            this._parentSection = parentSection;
        }
        return this._parentSection; 
    }
    getName(): string {
        return this._name;
    }
    getLabel(): string {
        throw new Error("Method not implemented.");
    }
    setLabel(label: string): void {
        throw new Error("Method not implemented.");
    }
    getVisible(): boolean {
        return this._isVisible;
    }
    setVisible(visible: boolean): void {
        this._isVisible = visible;
    }
    setNotification(message: string, uniqueId?: string): boolean {
        let notification = { message: message, uniqueId: uniqueId };
        return this._notifications.push(notification) > 0;
    }
    clearNotification(uniqueId?: string): boolean {
        let notificationCountBefore = this._notifications.length;
        this._notifications = this._notifications.filter(f => f.uniqueId !== uniqueId);
        return this._notifications.length < notificationCountBefore;
    }
    addNotification(notification: Xrm.AddNotificationObject): void {
        this._notifications.push(notification);
    }
}