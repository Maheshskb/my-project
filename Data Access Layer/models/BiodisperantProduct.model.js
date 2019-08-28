const mongoose = require('mongoose');


var BiodisperantProduct = mongoose.model('BiodisperantProduct',{
    CreatedDate:{type:Date},
    ModifiedDate:{type:Date},
    Turbidity: { type: String },
    MaintScore: { type: String },
    Product: { type: String },
    Dosage: { type: String },
          
},'BiodisperasntProduct');

    
module.exports = { BiodisperantProduct };