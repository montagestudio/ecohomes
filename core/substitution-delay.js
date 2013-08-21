/**
 * @module ./substitution-delay
 */
var Montage = require("montage").Montage;
/**
 * @class SubstitutionDelay
 * @extends Montage
 */
exports.SubstitutionDelay = Montage.specialize(/** @lends SubstitutionDelay# */ {

    constructor: {
        value: function SubstitutionDelay() {
            this.super();
            this.switchValue = Object.create(null);
        }
    },

    enabled: {
        value: true
    },

    excluded: {
        value: null
    },

    delay: {
        value: 2000
    },

    delaySwitchValue: {
        value: "none"
    },

    _getSwitchValuePropertyDescriptor: {
        value: function(name) {
            var ready,
                delay = this.delay,
                delaySwitchValue = this.delaySwitchValue;

            if (this.enabled) {
                ready = this.excluded && this.excluded.indexOf(name) >= 0;
            } else {
                ready = false;
            }

            return {
                configurable: true,
                get: function() {
                    var self = this;

                    if (ready) {
                        return name;
                    } else {
                        setTimeout(function() {
                            if (!ready) {
                                ready = true;
                                Montage.dispatchOwnPropertyChange.call(self, name, name);
                            }
                        }, delay);
                        return delaySwitchValue;
                    }
                }
            }
        }
    },

    switchValue: {
        value: null
    },

    switchValues: {
        set: function(values) {
            for (var i = 0; i < values.length; i++) {
                Object.defineProperty(this.switchValue, values[i], this._getSwitchValuePropertyDescriptor(values[i]));
            }
        }
    }
});