constructor( )
{}
const mongoose = require('mongoose');

var ProposalDetails = mongoose.model('ProposalDetails', {

    //  Step:{type:string},
     id : { type : String },

     CreatedDate : { type : String },

     ModifiedDate : { type : String },
     
     IsActive : { type : String },

     TowerDetail : {
      // id : { type : string },

      // CreatedDate : { type : string},
 
      // ModifiedDate : { type : string},
      
      // IsActive : { type : string},
 
      TowerNumbers : { type : String },
 
      TowerName : { type : String }

     },

     MakeUpWaterDetail :
      {

        // id : { type : String },
   
        // CreatedDate : { type : String },
   
        // ModifiedDate : { type : String },
   
        // IsActive : { type : String },
   
        SourceOfWater: { type: String },
        ddlSourceOfWater: { type: String },
   
        MakeUpWaterPh: { type: String },
        ddlMakeUpWaterPh: { type: String },
   
        MakeUpWaterTurbidity: { type: String },
        ddlMakeUpWaterTurbidity: { type: String },
   
        MakeUpWaterTDS: { type: String },
        ddlMakeUpWaterTDS: { type: String },
   
        MakeUpWaterConductivity: { type: String },
        ddlMakeUpWaterConductivity: { type: String },
   
        MakeUpWaterTotalHardness: { type: String },
        ddlMakeUpWaterTotalHardness: { type: String },
   
        MakeUpWaterCalHardness: { type: String },
        ddlMakeUpWaterCalHardness: { type: String },
   
        MakeUpWaterTotalAlkalinity: { type: String },
        ddlMakeUpWaterTotalAlkalinity: { type: String },
   
        MakeUpWaterChloride: { type: String },
        ddlMakeUpWaterChloride: { type: String },
   
        MakeUpWaterSulphates: { type: String },
        ddlMakeUpWaterSulphates: { type: String },
   
        MakeUpWaterSilica : { type: String },
        ddlMakeUpWaterSilica : { type: String },
   
        MakeUpWaterOtherInfo: { type: String },
        ddlMakeUpWaterOtherInfo: { type: String },
    
   },

     CirculatingWaterDetail:
        {
            id : { type : String },

            CreatedDate : { type : String },
       
            ModifiedDate : { type : String },
       
            IsActive : { type : String },
            
            CirculatingWaterPh: { type: String },
            ddlCirculatingWaterPh: { type: String },
       
            CirculatingWaterTurbidity: { type: String },
            ddlCirculatingWaterTurbidity: { type: String },
       
            CirculatingWaterTDS: { type: String },
            ddlCirculatingWaterTDS: { type: String },
       
            CirculatingWaterConductivity: { type: String },
            ddlCirculatingWaterConductivity: { type: String },
       
            CirculatingWaterTotalHardness: { type: String },
            ddlCirculatingWaterTotalHardness: { type: String },
       
            CirculatingWaterCalciumHardness: { type: String },
            ddlCirculatingWaterCalciumHardness: { type: String },
       
            CirculatingWaterTotalAlkalinity: { type: String },
            ddlCirculatingWaterTotalAlkalinity: { type: String },
       
            CirculatingWaterChloride: { type: String },
            ddlCirculatingWaterChloride: { type: String },
       
            CirculatingWaterSulphates: { type: String },
            ddlCirculatingWaterSulphates: { type: String },
       
            CirculatingWaterSilica: { type: String },
            ddlCirculatingWaterSilica: { type: String },
       
            CirculatingWaterPhosphate: { type: String },
            ddlCirculatingWaterPhosphate: { type: String },
       
            CirculatingWaterZinc: { type: String },
            ddlCirculatingWaterZinc: { type: String },

            CirculatingWaterFreeChlorine: { type : String },
            ddlCirculatingWaterFreeChlorine: { type : String},
       
            CirculatingWaterOtherInfo: { type: String },
            ddlCirculatingWaterOtherInfo: { type: String },
       
            CirculatingWater: { type: String },
            ddlCirculatingWater: { type: String }
        },

        CoolingTowerDetail :
         {

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
        
       },
       
       CoolingTowerOperatingCondition :
        {

        id : { type : String },
   
        CreatedDate : { type : String }, 
   
        ModifiedDate : { type : String },
        
        IsActive : { type : String },
   
        TestCondition1: { type: String },
        ddlTestCondition1: { type: String },
   
        TestCondition2: { type: String },
        ddlTestCondition2: { type: String },
   
        TestCondition3: { type: String },
        ddlTestCondition3: { type: String },
   
        TestCondition4: { type: String },
        ddlTestCondition4: { type: String },
   
        TestCondition5: { type: String },
        ddlTestCondition5: { type: String },
   
        TestCondition6: { type: String },
        ddlTestCondition6: { type: String },
   
        TestCondition7: { type: String },
        ddlTestCondition7: { type: String },
   
        TestCondition8: { type: String },
        ddlTestCondition8: { type: String },
    
   },
    
   WaterRequirementDetail :
   {
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

},

PhotoFileUploadProvision :
  {
    id : { type : String },

    CreatedDate : { type : String },

    ModifiedDate : { type : String },
    
    IsActive : { type : String },

    CorrosionPhotoFiles: { type: String },

    FoulingPhotoFiles: { type: String },

    AlagePhotoFile : { type : String },

    OtherPhotoFile1 : { type : String },

    OtherPhotoFile2 : { type : String }

}
    //  TowerDetails:{

   
}, 'ProposalDetails');
module.exports = { ProposalDetails };