
// const mongoose = require('mongoose');

var WaterRequirementDetail ={

     id : { type : String },

     CreatedDate : { type : String },

     ModifiedDate : { type : String },
     
     IsActive : { type : String },

     UsedMakeUpWater: { type: String },
     ddlUsedMakeUpWater: { type: String },

     MakeUpDoneProcess: { type: String },
     ddlMakeUpDoneProcess: { type: String },

     BlowDownQuantity: { type: String },
     ddlBlowDownQuantity: { type: String },

     BlowDownFrequency: { type: String },
     ddlBlowDownFrequency: { type: String },
 
};

module.exports = { WaterRequirementDetail };