const mongoose = require('mongoose');

const Product = mongoose.model('Product',{
    product_name : {type: String},
    product_brand_name : {type: String},
    product_description : {type: String},
    product_size : {type: String},
    product_qty : {type: String},
    product_quality : {type: String},
    product_base_price : {type: String},
    product_discount_price : {type: String},
    // product_type : {type: String},
    // pin : {type: String},
});

module.exports = Product;