var Component=require("montage/ui/component").Component;exports.NavItem=Component.specialize({constructor:{value:function(){this["super"]()}},_panelKey:{value:null},panelKey:{get:function(){return this._panelKey},set:function(e){e!==this._panelKey&&(this._panelKey=e,this.needsDraw=!0)}},_currentNavigationClassName:{value:null},draw:{value:function(){var e;this._currentNavigationClassName&&(this.element.classList.remove(this._currentNavigationClassName),this._currentNavigationClassName=null),this.panelKey&&(e="NavItem--"+this.panelKey,this.element.classList.add(e),this._currentNavigationClassName=e)}}});