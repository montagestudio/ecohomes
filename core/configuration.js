var Montage = require("montage").Montage;

exports.Configuration = Montage.specialize({

    constructor: {
        value: function Configuration () {
            this.super();

            this.defineBinding("optionsPrice", {"<-": "configurationMap.values().map{optionMap.values().filter{chosen}.map{price}.sum()}.sum()"});
            this.defineBinding("totalPrice", {"<-": "basePrice + optionsPrice"});
        }
    },

    init: {
        value: function (basePrice, configurationMap) {
            this.basePrice = basePrice;
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
    }

});
