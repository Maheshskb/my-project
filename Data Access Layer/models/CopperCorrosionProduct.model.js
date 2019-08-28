const mongoose = require('mongoose');


var CopperCorrosionProduct = mongoose.model('CopperCorrosionProduct',{
    CreatedDate:{type:Date},
    ModifiedDate:{type:Date},
    ProductName: { type: String },
    Dosage: { type: String },
          
},'CopperCorrosionProduct');

    
module.exports = { CopperCorrosionProduct };