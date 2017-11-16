montageDefine("b0111a3","core/meta/property-descriptor",{dependencies:["../core","./object-descriptor-reference","../deprecate","../logger","../core","../core","../core","../core"],factory:function(e,t,r){var i=e("../core").Montage,a=e("./object-descriptor-reference").ObjectDescriptorReference,l=e("../deprecate"),o=(e("../logger").logger("objectDescriptor"),{name:"default",cardinality:1,mandatory:!1,readOnly:!1,denyDelete:!1,valueType:"string",collectionValueType:"list",valueObjectPrototypeName:"",valueObjectModuleId:"",valueDescriptor:void 0,enumValues:[],defaultValue:void 0,helpKey:""});t.PropertyDescriptor=i.specialize({initWithNameObjectDescriptorAndCardinality:{value:function(e,t,r){return this._name=null!==e?e:o.name,this._owner=t,this.cardinality=r>0?r:o.cardinality,this}},initWithNameBlueprintAndCardinality:{value:l.deprecateMethod(void 0,function(e,t,r){return this.initWithNameObjectDescriptorAndCardinality(e,t,r)},"new PropertyBlueprint().initWithNameBlueprintAndCardinality","new PropertyDescriptor().initWithNameObjectDescriptorAndCardinality")},serializeSelf:{value:function(e){e.setProperty("name",this.name),e.setProperty("objectDescriptor",this._owner,"reference"),this.cardinality===1/0?e.setProperty("cardinality",-1):this._setPropertyWithDefaults(e,"cardinality",this.cardinality),this._setPropertyWithDefaults(e,"mandatory",this.mandatory),this._setPropertyWithDefaults(e,"readOnly",this.readOnly),this._setPropertyWithDefaults(e,"denyDelete",this.denyDelete),this._setPropertyWithDefaults(e,"valueType",this.valueType),this._setPropertyWithDefaults(e,"collectionValueType",this.collectionValueType),this._setPropertyWithDefaults(e,"valueObjectPrototypeName",this.valueObjectPrototypeName),this._setPropertyWithDefaults(e,"valueObjectModuleId",this.valueObjectModuleId),this._setPropertyWithDefaults(e,"valueDescriptor",this._valueDescriptorReference),this.enumValues.length>0&&this._setPropertyWithDefaults(e,"enumValues",this.enumValues),this._setPropertyWithDefaults(e,"defaultValue",this.defaultValue),this._setPropertyWithDefaults(e,"helpKey",this.helpKey),this._setPropertyWithDefaults(e,"definition",this.definition)}},deserializeSelf:{value:function(e){this._name=e.getProperty("name"),this._owner=e.getProperty("objectDescriptor")||e.getProperty("blueprint"),this.cardinality=this._getPropertyWithDefaults(e,"cardinality"),this.cardinality===-1&&(this.cardinality=1/0),this.mandatory=this._getPropertyWithDefaults(e,"mandatory"),this.readOnly=this._getPropertyWithDefaults(e,"readOnly"),this.denyDelete=this._getPropertyWithDefaults(e,"denyDelete"),this.valueType=this._getPropertyWithDefaults(e,"valueType"),this.collectionValueType=this._getPropertyWithDefaults(e,"collectionValueType"),this.valueObjectPrototypeName=this._getPropertyWithDefaults(e,"valueObjectPrototypeName"),this.valueObjectModuleId=this._getPropertyWithDefaults(e,"valueObjectModuleId"),this._valueDescriptorReference=this._getPropertyWithDefaults(e,"valueDescriptor","targetBlueprint"),this.enumValues=this._getPropertyWithDefaults(e,"enumValues"),this.defaultValue=this._getPropertyWithDefaults(e,"defaultValue"),this.helpKey=this._getPropertyWithDefaults(e,"helpKey"),this.definition=this._getPropertyWithDefaults(e,"definition");var t=e.getProperty("synonym");t&&(this.synonym=t)}},_setPropertyWithDefaults:{value:function(e,t,r){r!=o[t]&&e.setProperty(t,r)}},_getPropertyWithDefaults:{value:function(e){var t,r,i,a=Array.prototype.slice.call(arguments).slice(1,1/0);for(r=0,i=a.length;r<i&&!t;r+=1)t=e.getProperty(a[r]);return t||o[a[0]]}},_owner:{value:null},owner:{get:function(){return this._owner}},_name:{value:null},name:{serializable:!1,get:function(){return this._name}},identifier:{get:function(){return[this.owner.identifier,this.name].join("_")}},cardinality:{value:o.cardinality},mandatory:{value:o.mandatory},denyDelete:{value:o.denyDelete},readOnly:{value:o.readOnly},isToMany:{get:function(){return this.cardinality===1/0||this.cardinality>1}},isDerived:{get:function(){return!1}},definition:{value:null},valueType:{value:o.valueType},collectionValueType:{value:o.collectionValueType},valueObjectPrototypeName:{value:o.valueObjectPrototypeName},valueObjectModuleId:{value:o.valueObjectModuleId},valueDescriptor:{serializable:!1,get:function(){return this._valueDescriptorReference&&this._valueDescriptorReference.promise(this.require)},set:function(e){this._valueDescriptorReference=(new a).initWithValue(e)}},_targetObjectDescriptorReference:{value:null},_enumValues:{value:null},enumValues:{get:function(){return this._enumValues?this._enumValues:[]},set:function(e){Array.isArray(e)&&(this._enumValues=e)}},defaultValue:{value:o.defaultValue},helpKey:{value:o.helpKey},objectDescriptorModuleId:e("../core")._objectDescriptorModuleIdDescriptor,objectDescriptor:e("../core")._objectDescriptorDescriptor,isAssociationBlueprint:{get:l.deprecateMethod(void 0,function(){return!!this._valueDescriptorReference},"isAssociationBlueprint","No analog")},targetBlueprint:{get:l.deprecateMethod(void 0,function(){return this.valueDescriptor},"targetBlueprint.get","valueDescriptor.get"),set:l.deprecateMethod(void 0,function(e){this.valueDescriptor=e},"targetBlueprint.get","valueDescriptor.set")},blueprintDescriptorModuleId:e("../core")._objectDescriptorModuleIdDescriptor,blueprint:e("../core")._objectDescriptorDescriptor})}});