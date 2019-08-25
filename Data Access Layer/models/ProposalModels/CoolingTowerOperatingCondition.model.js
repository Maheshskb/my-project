var CoolingTowerOperatingCondition = {

     id : { type : String },

     CreatedDate : { type : String }, 

     ModifiedDate : { type : String },
     
     IsActive : { type : String },

     IsTowerMaintenanceProper: { type: String },
     ddlIsTowerMaintenanceProper: { type: String },

     IsAlgaeSeenOnTower: { type: String },
     ddlIsAlgaeSeenOnTower: { type: String },

     IsSlimeInTower: { type: String },
     ddlIsSlimeInTower: { type: String },

     IsSumpWaterTurbidity: { type: String },
     ddlIsSumpWaterTurbidity: { type: String },

     IsThereAnyContamination: { type: String },
     ddlIsThereAnyContamination: { type: String },

     IsCopperCorrosionControlRequired: { type: String },
     ddlIsCopperCorrosionControlRequired: { type: String },

     OtherObservation: { type: String },
     txtOtherObservation: { type: String },

     Comment: { type: String },
     txtComment: { type: String },
 
};


module.exports = { CoolingTowerOperatingCondition };