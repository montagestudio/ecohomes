var Montage = require("montage").Montage,
    products = require("./products.json");

exports.Products = Montage.specialize({
    constructor: {
        value: function Products() {
            this.super();
        }
    }
}, {
    /**
     * dollars
     */
    getProduct: {
        value: function(asin) {
            return products[asin];
        }
    }
});
