const mongoose = require('mongoose');

    var TransactionScreenData = mongoose.model('TransactionScreenData',{
        TowerNumbers: { type : Number },
        TowerName: { type : String}
       
},'TransactionScreenData');

    
module.exports = { TransactionScreenData };