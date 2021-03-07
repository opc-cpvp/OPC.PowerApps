declare namespace Form.sharepointdocumentlocation.Main {
  namespace Information {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "url option"): Xrm.PageSection;
        get(name: "{272eb814-0769-5ebe-3ed1-e95a0b16853e}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "absoluteurl"): Xrm.Attribute<string>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "locationtype"): Xrm.OptionSetAttribute<sharepointdocumentlocation_locationtype>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "parentsiteorlocation"): Xrm.LookupAttribute<"sharepointdocumentlocation" | "sharepointsite">;
      get(name: "regardingobjectid"): Xrm.LookupAttribute<"account" | "kbarticle" | "knowledgearticle" | "msdyn_knowledgearticletemplate" | "opc_complaint">;
      get(name: "relativeurl"): Xrm.Attribute<string>;
      get(name: "statecode"): Xrm.OptionSetAttribute<sharepointdocumentlocation_statecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "absoluteurl"): Xrm.StringControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "footer_statecode"): Xrm.OptionSetControl<sharepointdocumentlocation_statecode>;
      get(name: "locationtype"): Xrm.OptionSetControl<sharepointdocumentlocation_locationtype>;
      get(name: "name"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "parentsiteorlocation"): Xrm.LookupControl<"sharepointdocumentlocation" | "sharepointsite">;
      get(name: "regardingobjectid"): Xrm.LookupControl<"account" | "kbarticle" | "knowledgearticle" | "msdyn_knowledgearticletemplate" | "opc_complaint">;
      get(name: "relativeurl"): Xrm.StringControl;
      get(name: "urloption"): Xrm.OptionSetControl<number>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "absoluteurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "locationtype"): Xrm.OptionSetAttribute<sharepointdocumentlocation_locationtype>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "parentsiteorlocation"): Xrm.LookupAttribute<"sharepointdocumentlocation" | "sharepointsite">;
    getAttribute(attributeName: "regardingobjectid"): Xrm.LookupAttribute<"account" | "kbarticle" | "knowledgearticle" | "msdyn_knowledgearticletemplate" | "opc_complaint">;
    getAttribute(attributeName: "relativeurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<sharepointdocumentlocation_statecode>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "absoluteurl"): Xrm.StringControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<sharepointdocumentlocation_statecode>;
    getControl(controlName: "locationtype"): Xrm.OptionSetControl<sharepointdocumentlocation_locationtype>;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "parentsiteorlocation"): Xrm.LookupControl<"sharepointdocumentlocation" | "sharepointsite">;
    getControl(controlName: "regardingobjectid"): Xrm.LookupControl<"account" | "kbarticle" | "knowledgearticle" | "msdyn_knowledgearticletemplate" | "opc_complaint">;
    getControl(controlName: "relativeurl"): Xrm.StringControl;
    getControl(controlName: "urloption"): Xrm.OptionSetControl<number>;
    getControl(controlName: string): undefined;
  }
}
