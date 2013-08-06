var Montage = require("montage").Montage,
    Electricity = require("usdoe/service/electricity").Electricity;

exports.TemperatureController = Montage.specialize({
    /**
     * @private
     */
    constructor: {
        value: function TemperatureController() {
//            this.addPathChangeListener("[savingsPerHotDegree, savingsPerColdDegree, averageTemperature, dayTemperature, nightTemperature, zipCode].every{}", this, "_updateConsumption");

            var observeProperties = ["savingsPerHotDegree", "savingsPerColdDegree", "averageTemperature", "dayTemperature", "nightTemperature", "zipCode"];
            for (var i = 0; i < observeProperties.length; i++) {
                this.addPathChangeListener(observeProperties[i], this, "_updateConsumption");
            }
        }
    },

    /**
     * Percentage
     */
    savingsPerHotDegree: {
        value: 0.02
    },

    /**
     * Percentage
     */
    savingsPerColdDegree: {
        value: 0.01
    },

    averageTemperature: {
        value: 70
    },

    dayTemperature: {
        value: null
    },

    nightTemperature: {
        value: null
    },

    zipCode: {
        value: null
    },

    consumption: {
        value: null
    },

    _updateConsumption: {
        value: function() {
            var consumptionPercentage,
                averageConsumption;

            if (this.dayTemperature && this.nightTemperature && this.zipCode) {
                averageConsumption = Electricity.getAverageAnnualConsumption(this.zipCode);
                consumptionPercentage = 1 +
                    this._getSavingsFromTemperature(this.dayTemperature) +
                    this._getSavingsFromTemperature(this.nightTemperature);

                this.consumption = averageConsumption * consumptionPercentage;
            }
        }
    },

    /**
     * Percentage
     */
    _getSavingsFromTemperature: {
        value: function(temperature) {
            var consumptionSavings;

            if (temperature >= this.averageTemperature - 10) {
                consumptionSavings = (temperature - this.averageTemperature) * this.savingsPerHotDegree;
            } else {
                consumptionSavings = (-10 * this.savingsPerHotDegree) + (this.averageTemperature - 10 - temperature) * this.savingsPerColdDegree;
            }

            return consumptionSavings;
        }
    }
});