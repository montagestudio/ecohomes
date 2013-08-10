var Montage = require("montage/core/core").Montage,
    Component = require("montage/ui/component").Component;

exports.Header = Montage.create(Component, {
    
    handleAction: {
        value: function(event) {
            event.stopPropagation();
            this.dispatchEventNamed("back");
        }
    }
    
    
});
