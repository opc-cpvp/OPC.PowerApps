
export function getTypedFormContext<ContextType extends Xrm.PageBase<Xrm.AttributeCollectionBase, Xrm.TabCollectionBase, Xrm.ControlCollectionBase>>(executingContext: Xrm.ExecutionContext<ContextType>) {
    return <ContextType>executingContext.getFormContext();
}