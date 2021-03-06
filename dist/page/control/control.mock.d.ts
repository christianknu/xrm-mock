/// <reference types="xrm" />
export declare class ControlMock implements Xrm.Page.Control {
    name: string;
    controlType: Xrm.Page.ControlType;
    parent: Xrm.Page.Section;
    uiLabelElement: Xrm.Page.UiLabelElement;
    uiCanGetVisibleElement: Xrm.Page.UiCanGetVisibleElement;
    constructor(components: ControlComponents);
    getControlType(): Xrm.Page.ControlType | string;
    getName(): string;
    getParent(): Xrm.Page.Section;
    getLabel(): string;
    setLabel(label: string): void;
    getVisible(): boolean;
}
export interface ControlComponents {
    name: string;
    controlType: Xrm.Page.ControlType;
    uiLabelElement?: Xrm.Page.UiLabelElement;
    uiCanGetVisibleElement?: Xrm.Page.UiCanGetVisibleElement;
    parent?: Xrm.Page.Section;
}
