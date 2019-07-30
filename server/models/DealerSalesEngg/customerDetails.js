
//         required: 'This Field can\'t be empty'
const mongoose = require('mongoose');

var customerDetail = mongoose.model('customerDetail', {

    CompanyName: { type: String },

    CityName: { type: String },

    Address: { type: String },

    Pincode: { type: Number },

    DealerCode: { type: Number },

    IndusrtyType: { type: String },

    CustOtherInfo: { type: String },

    GSTno: { type: String },

    ContactPersonName: { type: String },

    Designation: { type: String },

    FisrtEmail: { type: String },

    SecondEmail: { type: String },

    OfficeNumber: { type: Number },

    MobileNumber: { type: Number },

    MoreContacts: { type: Number },

    CustProdctPotential: { type: String },

    ChooseProductPraposal: { type: String },

    EnquireyNature: { type: String }

});



module.exports = { customerDetail };