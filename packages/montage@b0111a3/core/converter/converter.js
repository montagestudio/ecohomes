var Montage=require("../core").Montage,FUNCTION_CLASS="[object Function]",BOOLEAN_CLASS="[object Boolean]",NUMBER_CLASS="[object Number]",STRING_CLASS="[object String]",ARRAY_CLASS="[object Array]",DATE_CLASS="[object Date]",_toString=Object.prototype.toString,isNumber=function(e){return _toString.call(e)===NUMBER_CLASS};exports.isNumber=isNumber;var isDef=function(e){return e&&"undefined"!=typeof e};exports.isDef=isDef;var Validator=exports.Validator=Montage.specialize({validate:{value:null}}),Converter=exports.Converter=Montage.specialize({allowPartialConversion:{value:!0},convert:{enumerable:!1,value:null},revert:{enumerable:!1,value:null}},{blueprintModuleId:require("../core")._blueprintModuleIdDescriptor,blueprint:require("../core")._blueprintDescriptor});