const express = require('express');
var router = express.Router();
var {ProposalDetails} = require('../models/ProposalModels/ProposalDetails.model');


// => localhost:3000/TransactionDataScreen/

router.get('/', (req, res) => {

    ProposalDetails.find((err, docs) => {

        if (!err) { res.send(docs); }

        else { console.log('Error in Retriving Transaction Screen Details :' + JSON.stringify(err, undefined, 2)); }

    });

});
router.put('/', function(req,res,next){
    console.log("Error in Transaction Screen Data dfdfgd");
 
   console.log("payload"+req.body.id);
  //var v= ProposalDetails.find({id:ObjectId("5d4ea8911a187c055473b753")});
 //  console.log(v);
    ProposalDetails.findById(req.body.id).then(function(proposal){
        if(!proposal){return res.sendStatus(401);}
        
            console.log("Error in Transaction Screen Data Saving");
           //Tower Details
            CreatedDate = req.body.CreatedDate;
            ModifiedDate = req.body.ModifiedDate;
            IsActive = req.body.IsActive;
            TowerNumbers = req.body.TowerNumbers;
            TowerName  = req.body.TowerName;

            //Make up Water Details
            proposal.MakeUpWaterDetail.CreatedDate = req.body.MakeUpWaterDetail.CreatedDate;
            proposal.MakeUpWaterDetail.ModifiedDate = req.body.MakeUpWaterDetail.ModifiedDate;
            proposal.MakeUpWaterDetail.IsActive = req.body.MakeUpWaterDetail.IsActive;

            proposal.MakeUpWaterDetail.SourceOfWater = req.body.MakeUpWaterDetail.SourceOfWater;
            proposal.MakeUpWaterDetail.ddlSourceOfWater = req.body.MakeUpWaterDetail.ddlSourceOfWater;

            proposal.MakeUpWaterDetail.MakeUpWaterPh = req.body.MakeUpWaterDetail.MakeUpWaterPh;
            proposal.MakeUpWaterDetail.ddlMakeUpWaterPh = req.body.MakeUpWaterDetail.ddlMakeUpWaterPh;

            proposal.MakeUpWaterDetail.MakeUpWaterTurbidity = req.body.MakeUpWaterDetail.MakeUpWaterTurbidity;
            proposal.MakeUpWaterDetail.ddlMakeUpWaterTurbidity = req.body.MakeUpWaterDetail.ddlMakeUpWaterTurbidity;

            proposal.MakeUpWaterDetail.MakeUpWaterTDS = req.body.MakeUpWaterDetail.MakeUpWaterTDS;
            proposal.MakeUpWaterDetail.ddlMakeUpWaterTDS = req.body.MakeUpWaterDetail.ddlMakeUpWaterTDS;

            proposal.MakeUpWaterDetail.MakeUpWaterConductivity = req.body.MakeUpWaterDetail.MakeUpWaterConductivity;
            proposal.MakeUpWaterDetail.ddlMakeUpWaterConductivity = req.body.MakeUpWaterDetail.ddlMakeUpWaterConductivity;

            proposal.MakeUpWaterDetail.MakeUpWaterTotalHardness = req.body.MakeUpWaterDetail.MakeUpWaterTotalHardness;
            proposal.MakeUpWaterDetail.ddlMakeUpWaterTotalHardness = req.body.MakeUpWaterDetail.ddlMakeUpWaterTotalHardness;

            proposal.MakeUpWaterDetail.MakeUpWaterCalHardness = req.body.MakeUpWaterDetail.MakeUpWaterCalHardness;
            proposal.MakeUpWaterDetail.ddlMakeUpWaterCalHardness = req.body.MakeUpWaterDetail.ddlMakeUpWaterCalHardness;

            proposal.MakeUpWaterDetail.MakeUpWaterTotalAlkalinity = req.body.MakeUpWaterDetail.MakeUpWaterTotalAlkalinity;
            proposal.MakeUpWaterDetail.ddlMakeUpWaterTotalAlkalinity = req.body.MakeUpWaterDetail.ddlMakeUpWaterTotalAlkalinity;

            proposal.MakeUpWaterDetail.ModifiedDate = req.body.MakeUpWaterDetail.ModifiedDate;
            proposal.MakeUpWaterDetail.IsActive = req.body.MakeUpWaterDetail.IsActive;

            proposal.MakeUpWaterDetail.MakeUpWaterChloride = req.body.MakeUpWaterDetail.MakeUpWaterChloride;
            proposal.MakeUpWaterDetail.ddlMakeUpWaterChloride = req.body.MakeUpWaterDetail.ddlMakeUpWaterChloride;

            proposal.MakeUpWaterDetail.MakeUpWaterSulphates = req.body.MakeUpWaterDetail.MakeUpWaterSulphates;
            proposal.MakeUpWaterDetail.ddlMakeUpWaterSulphates = req.body.MakeUpWaterDetail.ddlMakeUpWaterSulphates;

            proposal.MakeUpWaterDetail.MakeUpWaterSilica = req.body.MakeUpWaterDetail.MakeUpWaterSilica;
            proposal.MakeUpWaterDetail.ddlMakeUpWaterSilica = req.body.MakeUpWaterDetail.ddlMakeUpWaterSilica;

            proposal.MakeUpWaterDetail.MakeUpWaterOtherInfo = req.body.MakeUpWaterDetail.MakeUpWaterOtherInfo;
            proposal.MakeUpWaterDetail.ddlMakeUpWaterOtherInfo = req.body.MakeUpWaterDetail.ddlMakeUpWaterOtherInfo;


            //Circulating Water DEtails
            proposal.CirculatingWaterDetail.ModifiedDate= req.body.CirculatingWaterDetail.ModifiedDate;
            proposal.CirculatingWaterDetail.CreatedDate= req.body.CirculatingWaterDetail.CreatedDate;
            proposal.CirculatingWaterDetail.IsActive= req.body.CirculatingWaterDetail.IsActive;

            proposal.CirculatingWaterDetail.CirculatingWaterPh= req.body.CirculatingWaterDetail.CirculatingWaterPh;
            proposal.CirculatingWaterDetail.ddlCirculatingWaterPh= req.body.CirculatingWaterDetail.ddlCirculatingWaterPh;

            proposal.CirculatingWaterDetail.CirculatingWaterTurbidity= req.body.CirculatingWaterDetail.CirculatingWaterTurbidity;
            proposal.CirculatingWaterDetail.ddlCirculatingWaterTurbidity= req.body.CirculatingWaterDetail.ddlCirculatingWaterTurbidity;
           
            proposal.CirculatingWaterDetail.CirculatingWaterTDS= req.body.CirculatingWaterDetail.CirculatingWaterTDS;
            proposal.CirculatingWaterDetail.ddlCirculatingWaterTDS= req.body.CirculatingWaterDetail.ddlCirculatingWaterTDS;
            
            proposal.CirculatingWaterDetail.CirculatingWaterConductivity= req.body.CirculatingWaterDetail.CirculatingWaterConductivity;
            proposal.CirculatingWaterDetail.ddlCirculatingWaterConductivity= req.body.CirculatingWaterDetail.ddlCirculatingWaterConductivity;

            proposal.CirculatingWaterDetail.CirculatingWaterTotalHardness= req.body.CirculatingWaterDetail.CirculatingWaterTotalHardness;
            proposal.CirculatingWaterDetail.ddlCirculatingWaterTotalHardness= req.body.CirculatingWaterDetail.ddlCirculatingWaterTotalHardness;

            proposal.CirculatingWaterDetail.CirculatingWaterCalciumHardness= req.body.CirculatingWaterDetail.CirculatingWaterCalciumHardness;
            proposal.CirculatingWaterDetail.ddlCirculatingWaterCalciumHardness= req.body.CirculatingWaterDetail.ddlCirculatingWaterCalciumHardness;

            proposal.CirculatingWaterDetail.CirculatingWaterTotalAlkalinity= req.body.CirculatingWaterDetail.CirculatingWaterTotalAlkalinity;
            proposal.CirculatingWaterDetail.ddlCirculatingWaterTotalAlkalinity= req.body.CirculatingWaterDetail.ddlCirculatingWaterTotalAlkalinity;
 
            proposal.CirculatingWaterDetail.CirculatingWaterChloride= req.body.CirculatingWaterDetail.CirculatingWaterChloride;
            proposal.CirculatingWaterDetail.ddlCirculatingWaterChloride= req.body.CirculatingWaterDetail.ddlCirculatingWaterChloride;
 
            proposal.CirculatingWaterDetail.CirculatingWaterSulphates= req.body.CirculatingWaterDetail.CirculatingWaterSulphates;
            proposal.CirculatingWaterDetail.ddlCirculatingWaterSulphates= req.body.CirculatingWaterDetail.ddlCirculatingWaterSulphates;
 
            proposal.CirculatingWaterDetail.CirculatingWaterSilica= req.body.CirculatingWaterDetail.CirculatingWaterSilica;
            proposal.CirculatingWaterDetail.ddlCirculatingWaterSilica= req.body.CirculatingWaterDetail.ddlCirculatingWaterSilica;
 
            proposal.CirculatingWaterDetail.CirculatingWaterPhosphate= req.body.CirculatingWaterDetail.CirculatingWaterPhosphate;
            proposal.CirculatingWaterDetail.ddlCirculatingWaterPhosphate= req.body.CirculatingWaterDetail.ddlCirculatingWaterPhosphate;
 
            proposal.CirculatingWaterDetail.CirculatingWaterZinc= req.body.CirculatingWaterDetail.CirculatingWaterZinc;
            proposal.CirculatingWaterDetail.ddlCirculatingWaterZinc= req.body.CirculatingWaterDetail.ddlCirculatingWaterZinc;

            proposal.CirculatingWaterDetail.CirculatingWaterOtherInfo= req.body.CirculatingWaterDetail.CirculatingWaterOtherInfo;
            proposal.CirculatingWaterDetail.ddlCirculatingWaterOtherInfo= req.body.CirculatingWaterDetail.ddlCirculatingWaterOtherInfo;

            proposal.CirculatingWaterDetail.CirculatingWater= req.body.CirculatingWaterDetail.CirculatingWater;
            proposal.CirculatingWaterDetail.ddlCirculatingWater= req.body.CirculatingWaterDetail.ddlCirculatingWater;

            // CoolingTowerDetail
            proposal.CoolingTowerDetail.CreatedDate= req.body.CoolingTowerDetail.CreatedDate;
            proposal.CoolingTowerDetail.ModifiedDate= req.body.CoolingTowerDetail.ModifiedDate;
            proposal.CoolingTowerDetail.IsActive= req.body.CoolingTowerDetail.IsActive;

            proposal.CoolingTowerDetail.WaterCirculationRate= req.body.CoolingTowerDetail.WaterCirculationRate;
            proposal.CoolingTowerDetail.ddlWaterCirculationRate= req.body.CoolingTowerDetail.ddlWaterCirculationRate;

            proposal.CoolingTowerDetail.TempOutlet= req.body.CoolingTowerDetail.TempOutlet;
            proposal.CoolingTowerDetail.ddlTempOutlet= req.body.CoolingTowerDetail.ddlTempOutlet;

            proposal.CoolingTowerDetail.DeltaT= req.body.CoolingTowerDetail.DeltaT;
            proposal.CoolingTowerDetail.ddlDeltaT= req.body.CoolingTowerDetail.ddlDeltaT;
            
            proposal.CoolingTowerDetail.Evaporation= req.body.CoolingTowerDetail.Evaporation;
            proposal.CoolingTowerDetail.ddlEvaporation= req.body.CoolingTowerDetail.ddlEvaporation;

            proposal.CoolingTowerDetail.BlowDown= req.body.CoolingTowerDetail.BlowDown;
            proposal.CoolingTowerDetail.ddlBlowDown= req.body.CoolingTowerDetail.ddlBlowDown;
            
            proposal.CoolingTowerDetail.COC= req.body.CoolingTowerDetail.COC;
            proposal.CoolingTowerDetail.ddlCOC= req.body.CoolingTowerDetail.ddlCOC;

            proposal.CoolingTowerDetail.MakeUpWater= req.body.CoolingTowerDetail.MakeUpWater;
            proposal.CoolingTowerDetail.ddlMakeUpWater= req.body.CoolingTowerDetail.ddlMakeUpWater;
            // .-------?
            proposal.CoolingTowerDetail.OperatingHrsPerDay= req.body.CoolingTowerDetail.OperatingHrsPerDay;
            proposal.CoolingTowerDetail.ddlOperatingHrsPerDay= req.body.CoolingTowerDetail.ddlOperatingHrsPerDay;

            proposal.CoolingTowerDetail.SideStreamFilterFlow= req.body.CoolingTowerDetail.SideStreamFilterFlow;
            proposal.CoolingTowerDetail.ddlSideStreamFilterFlow= req.body.CoolingTowerDetail.ddlSideStreamFilterFlow;
            
            proposal.CoolingTowerDetail.AcidUsedForPhControl= req.body.CoolingTowerDetail.AcidUsedForPhControl;
            proposal.CoolingTowerDetail.ddlAcidUsedForPhControl= req.body.CoolingTowerDetail.ddlAcidUsedForPhControl;

            proposal.CoolingTowerDetail.PercentagesAcidUsed= req.body.CoolingTowerDetail.PercentagesAcidUsed;
            proposal.CoolingTowerDetail.ddlPercentagesAcidUsed= req.body.CoolingTowerDetail.ddlPercentagesAcidUsed;
            
            proposal.CoolingTowerDetail.CoolingTowerSumpVolume= req.body.CoolingTowerDetail.CoolingTowerSumpVolume;
            proposal.CoolingTowerDetail.ddlCoolingTowerSumpVolume= req.body.CoolingTowerDetail.ddlCoolingTowerSumpVolume;

            proposal.CoolingTowerDetail.CoolingTowerCapacityTR= req.body.CoolingTowerDetail.CoolingTowerCapacityTR;
            proposal.CoolingTowerDetail.ddlCoolingTowerCapacityTR= req.body.CoolingTowerDetail.ddlCoolingTowerCapacityTR;
            
            proposal.CoolingTowerDetail.CoolingTowerOtherInfo= req.body.CoolingTowerDetail.CoolingTowerOtherInfo;
            proposal.CoolingTowerDetail.ddlCoolingTowerOtherInfo= req.body.CoolingTowerDetail.ddlCoolingTowerOtherInfo;
           
           //CoolingTowerOperatingCondition
           proposal.CoolingTowerOperatingCondition.CreatedDate= req.body.CoolingTowerOperatingCondition.CreatedDate;
           proposal.CoolingTowerOperatingCondition.ModifiedDate= req.body.CoolingTowerOperatingCondition.ModifiedDate;
           proposal.CoolingTowerOperatingCondition.IsActive= req.body.CoolingTowerOperatingCondition.IsActive;

           proposal.CoolingTowerOperatingCondition.TestCondition1= req.body.CoolingTowerOperatingCondition.TestCondition1;
           proposal.CoolingTowerOperatingCondition.ddlTestCondition1= req.body.CoolingTowerOperatingCondition.ddlTestCondition1;

           proposal.CoolingTowerOperatingCondition.TestCondition2= req.body.CoolingTowerOperatingCondition.TestCondition2;
           proposal.CoolingTowerOperatingCondition.ddlTestCondition2= req.body.CoolingTowerOperatingCondition.ddlTestCondition2;

           proposal.CoolingTowerOperatingCondition.TestCondition3= req.body.CoolingTowerOperatingCondition.TestCondition3;
           proposal.CoolingTowerOperatingCondition.ddlTestCondition3= req.body.CoolingTowerOperatingCondition.ddlTestCondition3;

           proposal.CoolingTowerOperatingCondition.TestCondition4= req.body.CoolingTowerOperatingCondition.TestCondition4;
           proposal.CoolingTowerOperatingCondition.ddlTestCondition4= req.body.CoolingTowerOperatingCondition.ddlTestCondition4;

           proposal.CoolingTowerOperatingCondition.TestCondition5= req.body.CoolingTowerOperatingCondition.TestCondition5;
           proposal.CoolingTowerOperatingCondition.ddlTestCondition5= req.body.CoolingTowerOperatingCondition.ddlTestCondition5;

           proposal.CoolingTowerOperatingCondition.TestCondition6= req.body.CoolingTowerOperatingCondition.TestCondition6;
           proposal.CoolingTowerOperatingCondition.ddlTestCondition6= req.body.CoolingTowerOperatingCondition.ddlTestCondition6;

           proposal.CoolingTowerOperatingCondition.TestCondition7= req.body.CoolingTowerOperatingCondition.TestCondition7;
           proposal.CoolingTowerOperatingCondition.ddlTestCondition7= req.body.CoolingTowerOperatingCondition.ddlTestCondition7;

           proposal.CoolingTowerOperatingCondition.TestCondition8= req.body.CoolingTowerOperatingCondition.TestCondition8;
           proposal.CoolingTowerOperatingCondition.ddlTestCondition8= req.body.CoolingTowerOperatingCondition.ddlTestCondition8;

           //WaterRequirementDetail
           proposal.WaterRequirementDetail.CreatedDate= req.body.WaterRequirementDetail.CreatedDate;
           proposal.WaterRequirementDetail.ModifiedDate= req.body.WaterRequirementDetail.ModifiedDate;
           proposal.WaterRequirementDetail.IsActive= req.body.WaterRequirementDetail.IsActive;

           proposal.WaterRequirementDetail.UsedMakeUpWater= req.body.WaterRequirementDetail.UsedMakeUpWater;
           proposal.WaterRequirementDetail.ddlUsedMakeUpWater= req.body.WaterRequirementDetail.ddlUsedMakeUpWater;

           proposal.WaterRequirementDetail.MakeUpDoneProcess= req.body.WaterRequirementDetail.MakeUpDoneProcess;
           proposal.WaterRequirementDetail.ddlMakeUpDoneProcess= req.body.WaterRequirementDetail.ddlMakeUpDoneProcess;

           proposal.WaterRequirementDetail.BlowDownQuantity= req.body.WaterRequirementDetail.BlowDownQuantity;
           proposal.WaterRequirementDetail.ddlBlowDownQuantity= req.body.WaterRequirementDetail.ddlBlowDownQuantity;

           proposal.WaterRequirementDetail.BlowDownFrequency= req.body.WaterRequirementDetail.BlowDownFrequency;
           proposal.WaterRequirementDetail.ddlBlowDownFrequency= req.body.WaterRequirementDetail.ddlBlowDownFrequency;

            // proposal.CreatedDate = req.body.CreatedDate;
           // proposal.ModifiedDate = req.body.ModifiedDate;
            //proposal.IsActive = req.body.IsActive;
           
            console.log(proposal.CreatedDate);
            
      
        return proposal.save().then(function(){
           // if(!err){ 
                res.send(proposal);
            //}
           // else{ console.log("Error in Transaction Screen Data Saving  : " + JSON.stringify(err,undefined,2));}
        });
    }).catch(next);
});

// //This will post the prouct price data to the url
router.post('/', (req, res)=>
{
    //create an object of productDetail model class inside that we have field details of Product Details
    var TSdata = new ProposalDetails(
        {
            // TowerNumbers : req.body.TowerNumbers,
            // TowerName : req.body.TowerName,
            // id : req.body.id,
            CreatedDate : req.body.CreatedDate,
            ModifiedDate : req.body.ModifiedDate,
            IsActive : req.body.IsActive,
            TowerNumbers : req.body.TowerNumbers,
            TowerName : req.body.TowerName,

            CirculatingWaterDetail: {
                CreatedDate: req.body.CirculatingWaterDetail.CreatedDate,
                ModifiedDate: req.body.CirculatingWaterDetail.ModifiedDate,
                IsActive: req.body.CirculatingWaterDetail.IsActive,

                CirculatingWaterPh: req.body.CirculatingWaterDetail.CirculatingWaterPh,
                ddlCirculatingWaterPh: req.body.CirculatingWaterDetail.ddlCirculatingWaterPh,

                CirculatingWaterTurbidity: req.body.CirculatingWaterDetail.CirculatingWaterTurbidity,
                ddlCirculatingWaterTurbidity: req.body.CirculatingWaterDetail.ddlCirculatingWaterTurbidity,
                
                CirculatingWaterTDS: req.body.CirculatingWaterDetail.CirculatingWaterTDS,
                ddlCirculatingWaterTDS: req.body.CirculatingWaterDetail.ddlCirculatingWaterTDS,
                
                CirculatingWaterConductivity : req.body.CirculatingWaterDetail.CirculatingWaterConductivity,
                ddlCirculatingWaterConductivity : req.body.CirculatingWaterDetail.ddlCirculatingWaterConductivity,

                CirculatingWaterTotalHardness : req.body.CirculatingWaterDetail.CirculatingWaterTotalHardness,
                ddlCirculatingWaterTotalHardness : req.body.CirculatingWaterDetail.ddlCirculatingWaterTotalHardness,

                CirculatingWaterCalciumHardness : req.body.CirculatingWaterDetail.CirculatingWaterCalciumHardness,
                ddlCirculatingWaterCalciumHardness : req.body.CirculatingWaterDetail.ddlCirculatingWaterCalciumHardness,

                CirculatingWaterTotalAlkalinity : req.body.CirculatingWaterDetail.CirculatingWaterTotalAlkalinity,
                ddlCirculatingWaterTotalAlkalinity : req.body.CirculatingWaterDetail.ddlCirculatingWaterTotalAlkalinity,

                CirculatingWaterChloride : req.body.CirculatingWaterDetail.CirculatingWaterChloride,
                ddlCirculatingWaterChloride : req.body.CirculatingWaterDetail.ddlCirculatingWaterChloride,

                CirculatingWaterSulphates : req.body.CirculatingWaterDetail.CirculatingWaterSulphates,
                ddlCirculatingWaterSulphates : req.body.CirculatingWaterDetail.ddlCirculatingWaterSulphates,

                CirculatingWaterSilica : req.body.CirculatingWaterDetail.CirculatingWaterSilica,
                ddlCirculatingWaterSilica : req.body.CirculatingWaterDetail.ddlCirculatingWaterSilica,

                CirculatingWaterPhosphate : req.body.CirculatingWaterDetail.CirculatingWaterPhosphate,
                ddlCirculatingWaterPhosphate : req.body.CirculatingWaterDetail.ddlCirculatingWaterPhosphate,

                CirculatingWaterZinc : req.body.CirculatingWaterDetail.CirculatingWaterZinc,
                ddlCirculatingWaterZinc : req.body.CirculatingWaterDetail.ddlCirculatingWaterZinc,

                CirculatingWaterOtherInfo : req.body.CirculatingWaterDetail.CirculatingWaterOtherInfo,
                ddlCirculatingWaterOtherInfo : req.body.CirculatingWaterDetail.ddlCirculatingWaterOtherInfo,

                CirculatingWater : req.body.CirculatingWaterDetail.CirculatingWater,
                ddlCirculatingWater : req.body.CirculatingWaterDetail.ddlCirculatingWater,

            },

            //Make Up Water Details
            MakeUpWaterDetail: {
                CreatedDate: req.body.MakeUpWaterDetail.CreatedDate,
                ModifiedDate: req.body.MakeUpWaterDetail.ModifiedDate,
                IsActive: req.body.MakeUpWaterDetail.IsActive,

                SourceOfWater: req.body.MakeUpWaterDetail.SourceOfWater,
                ddlSourceOfWater: req.body.MakeUpWaterDetail.ddlSourceOfWater,

                MakeUpWaterPh: req.body.MakeUpWaterDetail.MakeUpWaterPh,
                ddlMakeUpWaterPh: req.body.MakeUpWaterDetail.ddlMakeUpWaterPh,

                MakeUpWaterTurbidity: req.body.MakeUpWaterDetail.MakeUpWaterTurbidity,
                ddlMakeUpWaterTurbidity: req.body.MakeUpWaterDetail.ddlMakeUpWaterTurbidity,

                MakeUpWaterTDS: req.body.MakeUpWaterDetail.MakeUpWaterTDS,
                ddlMakeUpWaterTDS: req.body.MakeUpWaterDetail.ddlMakeUpWaterTDS,

                MakeUpWaterConductivity: req.body.MakeUpWaterDetail.MakeUpWaterConductivity,
                ddlMakeUpWaterConductivity: req.body.MakeUpWaterDetail.ddlMakeUpWaterConductivity,

                MakeUpWaterTotalHardness: req.body.MakeUpWaterDetail.MakeUpWaterTotalHardness,
                ddlMakeUpWaterTotalHardness: req.body.MakeUpWaterDetail.ddlMakeUpWaterTotalHardness,

                MakeUpWaterCalHardness: req.body.MakeUpWaterDetail.MakeUpWaterCalHardness,
                ddlMakeUpWaterCalHardness: req.body.MakeUpWaterDetail.ddlMakeUpWaterCalHardness,

                MakeUpWaterTotalAlkalinity: req.body.MakeUpWaterDetail.MakeUpWaterTotalAlkalinity,
                ddlMakeUpWaterTotalAlkalinity: req.body.MakeUpWaterDetail.ddlMakeUpWaterTotalAlkalinity,

                MakeUpWaterChloride: req.body.MakeUpWaterDetail.MakeUpWaterChloride,
                ddlMakeUpWaterChloride: req.body.MakeUpWaterDetail.ddlMakeUpWaterChloride,
          
                MakeUpWaterSulphates: req.body.MakeUpWaterDetail.MakeUpWaterSulphates,
                ddlMakeUpWaterSulphates: req.body.MakeUpWaterDetail.ddlMakeUpWaterSulphates,

                MakeUpWaterSilica: req.body.MakeUpWaterDetail.MakeUpWaterSilica,
                ddlMakeUpWaterSilica: req.body.MakeUpWaterDetail.ddlMakeUpWaterSilica,

                MakeUpWaterOtherInfo: req.body.MakeUpWaterDetail.MakeUpWaterOtherInfo,
                ddlMakeUpWaterOtherInfo: req.body.MakeUpWaterDetail.ddlMakeUpWaterOtherInfo,
            },

            //Cooling Tower Details
            CoolingTowerDetail: {
                CreatedDate: req.body.CoolingTowerDetail.CreatedDate,
                ModifiedDate: req.body.CoolingTowerDetail.ModifiedDate,
                IsActive: req.body.CoolingTowerDetail.IsActive,

                WaterCirculationRate: req.body.CoolingTowerDetail.WaterCirculationRate,
                ddlWaterCirculationRate: req.body.CoolingTowerDetail.ddlWaterCirculationRate,

                TempOutlet: req.body.CoolingTowerDetail.TempOutlet,
                ddlTempOutlet: req.body.CoolingTowerDetail.ddlTempOutlet,

                DeltaT: req.body.CoolingTowerDetail.DeltaT,
                ddlDeltaT: req.body.CoolingTowerDetail.ddlDeltaT,

                Evaporation: req.body.CoolingTowerDetail.Evaporation,
                ddlEvaporation: req.body.CoolingTowerDetail.ddlEvaporation,

                BlowDown: req.body.CoolingTowerDetail.BlowDown,
                ddlBlowDown: req.body.CoolingTowerDetail.ddlBlowDown,

                COC: req.body.CoolingTowerDetail.COC,
                ddlCOC: req.body.CoolingTowerDetail.ddlCOC,

                MakeUpWater: req.body.CoolingTowerDetail.MakeUpWater,
                ddlMakeUpWater: req.body.CoolingTowerDetail.ddlMakeUpWater,
                
                OperatingHrsPerDay: req.body.CoolingTowerDetail.OperatingHrsPerDay,
                ddlOperatingHrsPerDay: req.body.CoolingTowerDetail.ddlOperatingHrsPerDay,

                SideStreamFilterFlow: req.body.CoolingTowerDetail.SideStreamFilterFlow,
                ddlSideStreamFilterFlow: req.body.CoolingTowerDetail.ddlSideStreamFilterFlow,

                AcidUsedForPhControl: req.body.CoolingTowerDetail.AcidUsedForPhControl,
                ddlAcidUsedForPhControl: req.body.CoolingTowerDetail.ddlAcidUsedForPhControl,

                PercentagesAcidUsed: req.body.CoolingTowerDetail.PercentagesAcidUsed,
                ddlPercentagesAcidUsed: req.body.CoolingTowerDetail.ddlPercentagesAcidUsed,

                CoolingTowerSumpVolume: req.body.CoolingTowerDetail.CoolingTowerSumpVolume,
                ddlCoolingTowerSumpVolume: req.body.CoolingTowerDetail.ddlCoolingTowerSumpVolume,

                CoolingTowerCapacityTR: req.body.CoolingTowerDetail.CoolingTowerCapacityTR,
                ddlCoolingTowerCapacityTR: req.body.CoolingTowerDetail.ddlCoolingTowerCapacityTR,

                CoolingTowerOtherInfo: req.body.CoolingTowerDetail.CoolingTowerOtherInfo,
                ddlCoolingTowerOtherInfo: req.body.CoolingTowerDetail.ddlCoolingTowerOtherInfo,
          
            },

            //Cooling Tower Operating Condition
            CoolingTowerOperatingCondition: {
                CreatedDate: req.body.CoolingTowerOperatingCondition.CreatedDate,
                ModifiedDate: req.body.CoolingTowerOperatingCondition.ModifiedDate,
                IsActive: req.body.CoolingTowerOperatingCondition.IsActive,

                TestCondition1: req.body.CoolingTowerOperatingCondition.TestCondition1,
                ddlTestCondition1: req.body.CoolingTowerOperatingCondition.ddlTestCondition1,

                TestCondition2: req.body.CoolingTowerOperatingCondition.TestCondition2,
                ddlTestCondition2: req.body.CoolingTowerOperatingCondition.ddlTestCondition2,

                TestCondition3: req.body.CoolingTowerOperatingCondition.TestCondition3,
                ddlTestCondition3: req.body.CoolingTowerOperatingCondition.ddlTestCondition3,

                TestCondition4: req.body.CoolingTowerOperatingCondition.TestCondition4,
                ddlTestCondition4: req.body.CoolingTowerOperatingCondition.ddlTestCondition4,

                TestCondition5: req.body.CoolingTowerOperatingCondition.TestCondition5,
                ddlTestCondition5: req.body.CoolingTowerOperatingCondition.ddlTestCondition5,

                TestCondition6: req.body.CoolingTowerOperatingCondition.TestCondition6,
                ddlTestCondition6: req.body.CoolingTowerOperatingCondition.ddlTestCondition6,

                TestCondition7: req.body.CoolingTowerOperatingCondition.TestCondition7,
                ddlTestCondition7: req.body.CoolingTowerOperatingCondition.ddlTestCondition7,

                TestCondition8: req.body.CoolingTowerOperatingCondition.TestCondition8,
                ddlTestCondition8: req.body.CoolingTowerOperatingCondition.ddlTestCondition8,
          
            },
       
            //Water Requirement Detail
            WaterRequirementDetail: {
                CreatedDate: req.body.WaterRequirementDetail.CreatedDate,
                ModifiedDate: req.body.WaterRequirementDetail.ModifiedDate,
                IsActive: req.body.WaterRequirementDetail.IsActive,
          
                UsedMakeUpWater: req.body.WaterRequirementDetail.UsedMakeUpWater,
                ddlUsedMakeUpWater: req.body.WaterRequirementDetail.ddlUsedMakeUpWater,

                MakeUpDoneProcess: req.body.WaterRequirementDetail.MakeUpDoneProcess,
                ddlMakeUpDoneProcess: req.body.WaterRequirementDetail.ddlMakeUpDoneProcess,

                BlowDownQuantity: req.body.WaterRequirementDetail.BlowDownQuantity,
                ddlBlowDownQuantity: req.body.WaterRequirementDetail.ddlBlowDownQuantity,

                BlowDownFrequency: req.body.WaterRequirementDetail.BlowDownFrequency,
                ddlBlowDownFrequency: req.body.WaterRequirementDetail.ddlBlowDownFrequency,

            },

            //PhotoFileUploadProvision
            PhotoFileUploadProvision: {
                CreatedDate: req.body.PhotoFileUploadProvision.CreatedDate,
                ModifiedDate: req.body.PhotoFileUploadProvision.ModifiedDate,
                IsActive: req.body.PhotoFileUploadProvision.IsActive,
          
            },
            
        });
        //insert data into mongoDB , after saving the record it will callback the function if there is any error it will sent to 'err' parameter , if condition is true then it will send parameters which is newly inserted 
        TSdata.save((err, doc)=>{
             if(!err){ res.send(doc);}
             else{ console.log("Error in Transaction Screen Data Saving  : " + JSON.stringify(err,undefined,2));}
        });
});

module.exports = router;