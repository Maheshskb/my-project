var CoolingTowerDetail = {

     id : { type : String },

     CreatedDate : { type : String },

     ModifiedDate : { type : String },
     
     IsActive : { type : String },

     WaterCirculationRate: { type: String },
     ddlWaterCirculationRate: { type: String },

     TempOutlet: { type: String },
     ddlTempOutlet: { type: String },

     TempInlet: { type: String },
     ddlTempInlet: { type: String },

     DeltaT: { type: String },
     ddlDeltaT: { type: String },

     Evaporation: { type: String },
     ddlEvaporation: { type: String },

     BlowDown: { type: String },
     ddlBlowDown: { type: String },

     COC: { type: String },
     ddlCOC: { type: String },

     MakeUpWater: { type: String },
     ddlMakeUpWater: { type: String },

     OperatingHrsPerDay: { type: String },
     ddlOperatingHrsPerDay: { type: String },

     SideStreamFilterFlow: { type: String },
     ddlSideStreamFilterFlow: { type: String },

     AcidUsedForPhControl: { type: String },
     ddlAcidUsedForPhControl: { type: String },

     PercentagesAcidUsed: { type: String },
     ddlPercentagesAcidUsed: { type: String },

     CoolingTowerSumpVolume: { type: String },
     ddlCoolingTowerSumpVolume: { type: String },

     CoolingTowerCapacityTR: { type: String },
     ddlCoolingTowerCapacityTR: { type: String },

     CoolingTowerOtherInfo: { type: String },
     ddlCoolingTowerOtherInfo: { type: String },
 
};


module.exports = { CoolingTowerDetail };