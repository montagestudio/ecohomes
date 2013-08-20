/**
 * @module ./eco-savings.reel
 */
var Component = require("montage/ui/component").Component,
    Eletricity = require("usdoe/service/electricity").Electricity,
    Map = require("montage/collections/map");

var ZIPCODE = 94085;

/**
 * @class EcoScore
 * @extends Component
 */
exports.EcoScore = Component.specialize(/** @lends EcoScore# */ {
    constructor: {
        value: function EcoScore() {
            this.super();
            this.defineBindings({
                "baseSavings": {"<-": "(averageConsumption - baseConsumption) * kwhPrice / 100"},
                "ecoSavings": {"<-": "(averageConsumption - ecoConsumption) * kwhPrice / 100"},
                "maxSavings": {"<-": "(maxConsumption - ecoConsumption) * kwhPrice / 100"}
            });
        }
    },

    baseConsumption: {
        value: 6000
    },

    ecoConsumption: {
        value: 5200
    },

    maxConsumption: {
        value: 10000
    },

    maxSavings: {
        value: null
    },

    _averageConsumption: {
        value: null
    },
    
    averageConsumption: {
        get: function() {
            if (this._averageConsumption == null) {
                this._averageConsumption = Math.round(Eletricity.getAverageAnnualConsumption(ZIPCODE));
            }
            return this._averageConsumption;
        }
    },

    _kwhPrice: {
        value: null
    },

    kwhPrice: {
        get: function() {
            if (this._kwhPrice == null) {
                this._kwhPrice = Eletricity.getKwhPrice(ZIPCODE);
            }
            return this._kwhPrice;
        }
    },

    baseSavings: {
        value: null
    },

    ecoSavings: {
        value: null
    },

    grade: {
        value: null
    },

    gradeLevels: {
        value: Map({
            "Average": 0,
            "Good": 1,
            "Excellent": 500,
            "Perfect": 1000
        })
    }
});
