// Data retrieved from http://www.eia.gov/electricity/sales_revenue_price/pdf/table5_a.pdf
var Montage = require("montage").Montage,
    data = require("./data.json");

exports.Electricity = Montage.specialize({
    constructor: {
        value: function Electricity() {
            this.super();
        }
    }
}, {
    /**
     * dollars
     */
    getAverageAnnualSpending: {
        value: function(zipCode) {
            return (this.getKwhPrice(zipCode) * this._getAnnualConsumption(zipCode)) /
                (this._getAnnualConsumers(zipCode) * 100);
        }
    },

    /**
     * kWH
     */
    getAverageAnnualConsumption: {
        value: function(zipCode) {
            return this._getAnnualConsumption(zipCode) /
                this._getAnnualConsumers(zipCode);
        }
    },

    /**
     * cents/kWh
     */
    getKwhPrice: {
        value: function(zipCode) {
            return data.kwhPrice[this._getStateByZipCode(zipCode)];
        }
    },

    _getAnnualConsumers: {
        value: function(zipCode) {
            return data.consumers[this._getStateByZipCode(zipCode)];
        }
    },

    /**
     * KwH
     */
    _getAnnualConsumption: {
        value: function(zipCode) {
            return data.consumption[this._getStateByZipCode(zipCode)];
        }
    },
    
    _getStateByZipCode: {
        value: function(zipCode) {
            var zipPrefix = Math.floor(zipCode / 100),
                stateNames = Object.keys(data.zipPrefixByState),
                states = data.zipPrefixByState,
                stateZipPrefix;

            for (var i = 0, stateName; (stateName = stateNames[i]); i++) {
                stateZipPrefix = states[stateName];
                // stateZipPrefix is an array of even elements (like pairs) that
                // correspond to zip prefixes intervals of the corresponding state.
                // Ex: [300, 319, 398, 399] means that this state uses the zip
                // prefix of 300-319, 398-399.
                for (var j = 0; j < stateZipPrefix.length; j+=2) {
                    if (zipPrefix >= stateZipPrefix[j] && zipPrefix <= stateZipPrefix[j+1]) {
                        return stateName;
                    }
                }
            }

            // defaults to California to make interaction simple.
            return "California";
        }
    }
});
