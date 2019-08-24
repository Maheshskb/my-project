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
    var currentProposal=null;
    ProposalDetails.find().then(function(proposals){
        if(!proposals){return res.sendStatus(401);}
      var maxValue="0";
        proposals.forEach(element => {
            if(maxValue< element.proposalId)
            {
                maxValue =element.proposalId;
            }  
            else{
                //console.log("payload"+req.body.id);
              currentProposal=element;
            }

      });
      proposalId= maxValue;
    })
   console.log("payload"+req.body.id);
  //var v= ProposalDetails.find({id:ObjectId("5d4ea8911a187c055473b753")});
 //  console.log(v);
    ProposalDetails.findById(proposalId).then(function(proposal){
        if(!proposal){return res.sendStatus(401);}
        
        var step= req.body.StepNumber;
            console.log("Error in Transaction Screen Data Saving");
           //Tower Details
           

            //Make up Water Details
            // if(proposal.step=="1")
            if(step=="1")
            {
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
            }

            if(step=="2")
{
            //Circulating Water DEtails
            proposal.CirculatingWaterDetail.ModifiedDate= req.body.CirculatingWaterDetail.ModifiedDate;
            proposal.CirculatingWaterDetail.CreatedDate= req.body.CirculatingWaterDetail.CreatedDate;
            TSdata.CirculatingWaterDetail.IsActive= req.body.CirculatingWaterDetail.IsActive;

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

            proposal.CirculatingWaterDetail.CirculatingWaterFreeChlorine= req.body.CirculatingWaterDetail.CirculatingWaterFreeChlorine;
            proposal.CirculatingWaterDetail.ddlCirculatingWaterFreeChlorine= req.body.CirculatingWaterDetail.ddlCirculatingWaterFreeChlorine;

            proposal.CirculatingWaterDetail.CirculatingWaterOtherInfo= req.body.CirculatingWaterDetail.CirculatingWaterOtherInfo;
            proposal.CirculatingWaterDetail.ddlCirculatingWaterOtherInfo= req.body.CirculatingWaterDetail.ddlCirculatingWaterOtherInfo;

            proposal.CirculatingWaterDetail.CirculatingWater= req.body.CirculatingWaterDetail.CirculatingWater;
            proposal.CirculatingWaterDetail.ddlCirculatingWater= req.body.CirculatingWaterDetail.ddlCirculatingWater;
}
            if(step=="3")
{
            // CoolingTowerDetail
            proposal.CoolingTowerDetail.CreatedDate= req.body.CoolingTowerDetail.CreatedDate;
            proposal.CoolingTowerDetail.ModifiedDate= req.body.CoolingTowerDetail.ModifiedDate;
            proposal.CoolingTowerDetail.IsActive= req.body.CoolingTowerDetail.IsActive;

            proposal.CoolingTowerDetail.WaterCirculationRate= req.body.CoolingTowerDetail.WaterCirculationRate;
            proposal.CoolingTowerDetail.ddlWaterCirculationRate= req.body.CoolingTowerDetail.ddlWaterCirculationRate;

            proposal.CoolingTowerDetail.TempInlet= req.body.CoolingTowerDetail.TempInlet;
            proposal.CoolingTowerDetail.ddlTempInlet= req.body.CoolingTowerDetail.ddlTempInlet;

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
}

            if(step=="4")
{

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
}
         if(step=="5")
{

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
}
      
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
    var proposalId=1;
    ProposalDetails.find().then(function(proposals){
        if(!proposals){return res.sendStatus(401);}
      var maxValue="0";
        proposals.forEach(element => {
            if(maxValue< element.proposalId)
            {
                maxValue =element.proposalId;
            }          
      });
      proposalId= maxValue+1;
    })

    //create an object of productDetail model class inside that we have field details of Product Details
    var TSdata = new ProposalDetails(
        {
            proposalId:proposalId,
            TowerDetail:{                
             TowerNumbers : req.body.TowerNumbers,
             TowerName : req.body.TowerName,
             
            //  CreatedDate : req.body.CreatedDate,
            //  ModifiedDate : req.body.ModifiedDate,
            //  IsActive : req.body.IsActive,
            // TowerNumbers : req.body.TowerNumbers,
            // TowerName : req.body.TowerName,
        },

            CirculatingWaterDetail: {
                // CreatedDate: req.body.CirculatingWaterDetail.CreatedDate,
                // ModifiedDate: req.body.CirculatingWaterDetail.ModifiedDate,
                 CreatedDate: "",
                ModifiedDate: "",
                IsActive: "",

                CirculatingWaterPh: "",
                ddlCirculatingWaterPh: "",

                CirculatingWaterTurbidity: "",
                ddlCirculatingWaterTurbidity: "",
                
                CirculatingWaterTDS: "",
                ddlCirculatingWaterTDS: "",
                
                CirculatingWaterConductivity : "",
                ddlCirculatingWaterConductivity : "",

                CirculatingWaterTotalHardness : "",
                ddlCirculatingWaterTotalHardness : "",

                CirculatingWaterCalciumHardness : "",
                ddlCirculatingWaterCalciumHardness : "",

                CirculatingWaterTotalAlkalinity : "",
                ddlCirculatingWaterTotalAlkalinity : "",

                CirculatingWaterChloride : "",
                ddlCirculatingWaterChloride : "",

                CirculatingWaterSulphates : "",
                ddlCirculatingWaterSulphates : "",

                CirculatingWaterSilica : "",
                ddlCirculatingWaterSilica : "",

                CirculatingWaterPhosphate : "",
                ddlCirculatingWaterPhosphate : "",

                CirculatingWaterZinc : "",
                ddlCirculatingWaterZinc : "",

                CirculatingWaterFreeChlorine : "",
                ddlCirculatingWaterFreeChlorine : "",

                CirculatingWaterOtherInfo : "",
                ddlCirculatingWaterOtherInfo : "",

                CirculatingWater : "",
                ddlCirculatingWater : "",

            },

            //Make Up Water Details
            MakeUpWaterDetail: {
                CreatedDate: "",
                ModifiedDate: "",
                IsActive: "",

                SourceOfWater: "",
                ddlSourceOfWater: "",

                MakeUpWaterPh: "",
                ddlMakeUpWaterPh: "",

                MakeUpWaterTurbidity: "",
                ddlMakeUpWaterTurbidity: "",

                MakeUpWaterTDS: "",
                ddlMakeUpWaterTDS: "",

                MakeUpWaterConductivity: "",
                ddlMakeUpWaterConductivity: "",

                MakeUpWaterTotalHardness: "",
                ddlMakeUpWaterTotalHardness: "",

                MakeUpWaterCalHardness: "",
                ddlMakeUpWaterCalHardness: "",

                MakeUpWaterTotalAlkalinity: "",
                ddlMakeUpWaterTotalAlkalinity: "",

                MakeUpWaterChloride: "",
                ddlMakeUpWaterChloride: "",
          
                MakeUpWaterSulphates: "",
                ddlMakeUpWaterSulphates: "",

                MakeUpWaterSilica: "",
                ddlMakeUpWaterSilica: "",

                MakeUpWaterOtherInfo: "",
                ddlMakeUpWaterOtherInfo: "",
            },

            //Cooling Tower Details
            CoolingTowerDetail: {
                CreatedDate: "",
                ModifiedDate: "",
                IsActive: "",

                WaterCirculationRate: "",
                ddlWaterCirculationRate: "",

                TempOutlet: "",
                ddlTempOutlet: "",

                TempInlet : "", 
                ddlTempInlet : "",

                DeltaT: "",
                ddlDeltaT: "",

                Evaporation: "",
                ddlEvaporation: "",

                BlowDown: "",
                ddlBlowDown: "",

                COC: "",
                ddlCOC: "",

                MakeUpWater: "",
                ddlMakeUpWater: "",
                
                OperatingHrsPerDay: "",
                ddlOperatingHrsPerDay: "",

                SideStreamFilterFlow: "",
                ddlSideStreamFilterFlow: "",

                AcidUsedForPhControl: "",
                ddlAcidUsedForPhControl: "",

                PercentagesAcidUsed: "",
                ddlPercentagesAcidUsed: "",

                CoolingTowerSumpVolume: "",
                ddlCoolingTowerSumpVolume: "",

                CoolingTowerCapacityTR: "",
                ddlCoolingTowerCapacityTR: "",

                CoolingTowerOtherInfo: "",
                ddlCoolingTowerOtherInfo: "",
          
            },

            //Cooling Tower Operating Condition
            CoolingTowerOperatingCondition: {
                CreatedDate: "",
                ModifiedDate: "",
                IsActive: "",

                TestCondition1: "",
                ddlTestCondition1: "",

                TestCondition2: "",
                ddlTestCondition2: "",

                TestCondition3: "",
                ddlTestCondition3: "",

                TestCondition4: "",
                ddlTestCondition4: "",

                TestCondition5: "",
                ddlTestCondition5: "",

                TestCondition6: "",
                ddlTestCondition6: "",

                TestCondition7: "",
                ddlTestCondition7: "",

                TestCondition8: "",
                ddlTestCondition8: "",
          
            },
       
            //Water Requirement Detail
            WaterRequirementDetail: {
                CreatedDate: "",
                ModifiedDate: "",
                IsActive: "",
          
                UsedMakeUpWater: "",
                ddlUsedMakeUpWater: "",

                MakeUpDoneProcess: "",
                ddlMakeUpDoneProcess: "",

                BlowDownQuantity: "",
                ddlBlowDownQuantity: "",

                BlowDownFrequency: "",
                ddlBlowDownFrequency: ""

            },

            //PhotoFileUploadProvision
            // PhotoFileUploadProvision: {
            //     CreatedDate: req.body.PhotoFileUploadProvision.CreatedDate,
            //     ModifiedDate: req.body.PhotoFileUploadProvision.ModifiedDate,
            //     IsActive: req.body.PhotoFileUploadProvision.IsActive,
          
            // },
            
        });
        //insert data into mongoDB , after saving the record it will callback the function if there is any error it will sent to 'err' parameter , if condition is true then it will send parameters which is newly inserted 
        TSdata.save((err, doc)=>{
             if(!err){ res.send(doc);
            console.log(doc);
            }
             else{ console.log("Error in Transaction Screen Data Saving  : " + JSON.stringify(err,undefined,2));}
        });
});

module.exports = router;