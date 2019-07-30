const mongoose = require('mongoose');


var RegisterDealerSalesEngg = mongoose.model('RegisterDealerSalesEngg',{
    FirstName: { type: String },
    LastName: { type: String },
    Address: { type: String },
    Email: { type: String },
    MobileNumber: { type: Number },
    PANNumber: { type: String },
    AdharNumber: { type: String },
    DealerCode: { type: String },
    Password: { type: String },
    CreatedDate:{type:Date},
    ModifiedDate:{type:Date},
    isActive:{type:Boolean},
},'RegisterDealerSalesEngg');

    
module.exports = { RegisterDealerSalesEngg };