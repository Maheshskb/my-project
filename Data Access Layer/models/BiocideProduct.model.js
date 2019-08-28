const mongoose = require('mongoose');


var BiocideProduct = mongoose.model('BiocideProduct',{
    CreatedDate:{type:Date},
    ModifiedDate:{type:Date},
    MaintScore: { type: String },
    HalfLife: { type: String },
    SourceOfWater: { type: String },
    ProductName: { type: String },
    Dosage: { type: String },
    Frequency: { type: String },
          
},'BiocideProduct');

    
module.exports = { BiocideProduct };