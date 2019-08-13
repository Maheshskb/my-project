const mongoose = require('mongoose');

    var TransactionScreenData = mongoose.model('TransactionScreenData',{
        TowerNumbers: { type : Number },
        TowerName: { type : String },

        //Make Up Water Details field
        SourceOfWater: { type : String },
        MakeUpWaterPh : { type : String },
        MakeUpWaterTurbidity : { type : String },
        MakeUpWaterTDS : { type : String },
        MakeUpWaterConductivity : { type : String },
        MakeUpWaterTotalHardness : { type : String },
        MakeUpWaterCalHardness : { type : String },
        MakeUpWaterTotalAlkalinity : { type : String },
        MakeUpWaterChloride : { type : String },
        MakeUpWaterSulphates : { type : String },
        MakeUpWaterSilica : { type : String },
        MakeUpWaterOtherInfo : { type : String }
       
},'TransactionScreenData');

    
module.exports = { TransactionScreenData };