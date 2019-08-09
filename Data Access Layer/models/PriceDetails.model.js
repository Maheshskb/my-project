
const mongoose = require('mongoose');

var priceDetail = mongoose.model('priceDetail', {

    ProductName: { type: String },

    THMinPrice: { type: Number },

    THMaxPrice: { type: Number },

    phMinPrice: { type: Number },

    PhMaxPrice: { type: Number },

    Dosage: { type: Number }

});



module.exports = { priceDetail};