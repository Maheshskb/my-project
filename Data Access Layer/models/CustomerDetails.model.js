
//         required: 'This Field can\'t be empty'
const mongoose = require('mongoose');

var CustomerDetail = mongoose.model('CustomerDetail', {

    // _id: { type: String },

    CompanyName: { type: String },

    CityName: { type: String },

    Address: { type: String },

    Pincode: { type: String },

    DealerCode: { type: String },

    IndusrtyType: { type: String },

    CustOtherInfo: { type: String },

    GSTno: { type: String },

    ContactPersonName: { type: String },

    Designation: { type: String },

    FisrtEmail: { type: String },

    SecondEmail: { type: String },

    OfficeNumber: { type: String },

    MobileNumber: { type: String },

    MoreContacts: { type: String },

    CustProdctPotential: { type: String },

    ChooseProductPraposal: { type: String },

    EnquireyNature: { type: String }

}, 'CustomerDetail');


module.exports = { CustomerDetail };