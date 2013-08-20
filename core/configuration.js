var Montage = require("montage").Montage;

exports.Configuration = Montage.specialize({

    constructor: {
        value: function Configuration () {
            this.super();

            this.defineBinding("optionsPrice", {"<-": "configurationMap.values().map{optionMap.values().filter{chosen}.map{price}.sum()}.sum()"});
            this.defineBinding("optionsConsumptionSavings", {"<-": "configurationMap.values().map{optionMap.values().filter{chosen}.map{consumptionSavings}.sum()}.sum()"});
            this.defineBinding("totalPrice", {"<-": "basePrice + optionsPrice"});
            this.defineBinding("totalConsumption", {"<-": "baseConsumption - optionsConsumptionSavings"});
        }
    },

    init: {
        value: function (basePrice, baseConsumption, configurationMap) {
            this.basePrice = basePrice;
            this.baseConsumption = baseConsumption;
            this.configurationMap = configurationMap;
            return this;
        }
    },

    /**
     * The collection of configuration sets keyed by an identifier
     */
    configurationMap: {
        value: null
    },

    /**
     * The base price of the house without any owner configuration
     */
    basePrice: {
        value: 0
    },

    /**
     * The price of all options chosen by the owner
     */
    optionsPrice: {
        value: 0
    },

    /**
     * The total price of the house, base and all options included
     */
    totalPrice: {
        value: 0
    },

    /**
     * The base kWh consumption of the house without any owner configuration
     */
    baseConsumption: {
        value: 0
    },

    /**
     * The kWh consumption savings of all options chosen by the owner
     */
    optionsConsumptionSavings: {
        value: 0
    },

    /**
     * The total kWh consumption of the house, base and all options included
     */
    totalConsumption: {
        value: 0
    }
});
