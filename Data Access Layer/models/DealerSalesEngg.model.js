
const mongoose = require('mongoose');

var DealerSalesEngg = mongoose.model('DealerSalesEngg', {

    // _id: { type: String },

    FirstName: { type: String },

    LastName: { type: String },

    Address: { type: String },

    Email: { type: String },

    MobileNumber: { type: String },

    PANnumber: { type: String },

    AdharNo: { type: String },

    Password: { type: String },

}, 'DealerSalesEngg');


module.exports = { DealerSalesEngg };