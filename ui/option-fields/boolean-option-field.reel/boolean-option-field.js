/**
 * @module ./boolean-option-field.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component,
    PressComposer = require("montage/composer/press-composer").PressComposer;

/**
 * @class BooleanOptionField
 * @extends Component
 */
exports.BooleanOptionField = Component.specialize(/** @lends BooleanOptionField# */ {
    constructor: {
        value: function BooleanOptionField() {
            this.super();

            this._pressComposer = new PressComposer();
            this.addComposerForElement(this._pressComposer, this.labelAreaElement);
            this._pressComposer.addEventListener("press", this, false);
        }
    },

    _pressComposer: {
        value: null
    },

    handlePress: {
        value: function() {
            var chosenCheckbox = this.templateObjects.chosenCheckbox;

            chosenCheckbox.checked = !chosenCheckbox.checked;
        }
    }
});
