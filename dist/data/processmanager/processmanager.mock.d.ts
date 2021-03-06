/// <reference types="xrm" />
export declare class ProcessManagerMock implements Xrm.Page.data.ProcessManager {
    enabledProcesses: Xrm.Page.Process[] | Xrm.Page.data.ProcessDictionary;
    constructor(enabledProcesses: Xrm.Page.Process[]);
    getActiveProcess(): Xrm.Page.Process;
    setActiveProcess(processId: string, callbackFunction?: Xrm.Page.data.ProcessCallbackDelegate): void;
    getActiveStage(): Xrm.Page.Stage;
    setActiveStage(stageId: string, callbackFunction?: Xrm.Page.data.ProcessCallbackDelegate): void;
    getActivePath(): Xrm.Collection.ItemCollection<Xrm.Page.Stage>;
    getEnabledProcesses(callbackFunction: (enabledProcesses: Xrm.Page.data.ProcessDictionary) => void): void;
    getSelectedStage(): Xrm.Page.Stage;
    addOnStageChange(handler: Xrm.Page.ContextSensitiveHandler): void;
    addOnStageSelected(handler: Xrm.Page.ContextSensitiveHandler): void;
    removeOnStageChange(handler: Xrm.Page.ContextSensitiveHandler): void;
    removeOnStageSelected(handler: Xrm.Page.ContextSensitiveHandler): void;
    moveNext(callbackFunction?: Xrm.Page.data.ProcessCallbackDelegate): void;
    movePrevious(callbackFunction?: Xrm.Page.data.ProcessCallbackDelegate): void;
}
