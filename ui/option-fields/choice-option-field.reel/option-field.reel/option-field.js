/**
 * @module ./option-field.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component,
    PressComposer = require("montage/composer/press-composer").PressComposer;

/**
 * @class OptionField
 * @extends Component
 */
exports.OptionField = Component.specialize(/** @lends OptionField# */ {
    constructor: {
        value: function OptionField() {
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
            var chosenRadioButton = this.templateObjects.chosenRadioButton;

            if (!chosenRadioButton.checked) {
                chosenRadioButton.checked = true;
            }
        }
    }
});
