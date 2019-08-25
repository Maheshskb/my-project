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
    var currentProposalId=null;
    var proposalItem=null;
    ProposalDetails.find().then(function(proposals){
        console.log("Find Call")
        if(!proposals){return res.sendStatus(401);}
        var maxValue=0;
        proposals.forEach(element => {
            console.log("Find Call- element.proposalId:"+element.ProposalId);
            console.log("Find Call- element.ObjectId:"+element._id);
            var proposalId1= parseInt(element.ProposalId);
           if(element.ProposalId!=null)
           {
            if(maxValue< proposalId1)
            {
                proposalItem= element;
            }    
        }  
      });
      
      if(proposalItem!=null)
      {
            var proposal =proposalItem;
            console.log("Data PUT Call3");
            var step1= req.body.StepNumber1;
            var step2= req.body.StepNumber2;
            var step= req.body.StepNumber3;
            var step4= req.body.StepNumber4;
            var step5= req.body.StepNumber5;
            // var step6= req.body.StepNumbe6;
            console.log("Data PUT Step:"+req.body.StepNumber);
               
            if(step1=="1")
            {
                console.log("Data PUT Step1");
            proposal.MakeUpWaterDetail.CreatedDate = req.body.CreatedDate;
            proposal.MakeUpWaterDetail.ModifiedDate = req.body.ModifiedDate;
            proposal.MakeUpWaterDetail.IsActive = req.body.IsActive;

            proposal.MakeUpWaterDetail.SourceOfWater = req.body.SourceOfWater;
            proposal.MakeUpWaterDetail.ddlSourceOfWater = req.body.ddlSourceOfWater;

            proposal.MakeUpWaterDetail.MakeUpWaterPh = req.body.MakeUpWaterPh;
            proposal.MakeUpWaterDetail.ddlMakeUpWaterPh = req.body.ddlMakeUpWaterPh;

            proposal.MakeUpWaterDetail.MakeUpWaterTurbidity = req.body.MakeUpWaterTurbidity;
            proposal.MakeUpWaterDetail.ddlMakeUpWaterTurbidity = req.body.ddlMakeUpWaterTurbidity;

            proposal.MakeUpWaterDetail.MakeUpWaterTDS = req.body.MakeUpWaterTDS;
            proposal.MakeUpWaterDetail.ddlMakeUpWaterTDS = req.body.ddlMakeUpWaterTDS;

            proposal.MakeUpWaterDetail.MakeUpWaterConductivity = req.body.MakeUpWaterConductivity;
            proposal.MakeUpWaterDetail.ddlMakeUpWaterConductivity = req.body.ddlMakeUpWaterConductivity;

            proposal.MakeUpWaterDetail.MakeUpWaterTotalHardness = req.body.MakeUpWaterTotalHardness;
            proposal.MakeUpWaterDetail.ddlMakeUpWaterTotalHardness = req.body.ddlMakeUpWaterTotalHardness;

            proposal.MakeUpWaterDetail.MakeUpWaterCalHardness = req.body.MakeUpWaterCalHardness;
            proposal.MakeUpWaterDetail.ddlMakeUpWaterCalHardness = req.body.ddlMakeUpWaterCalHardness;

            proposal.MakeUpWaterDetail.MakeUpWaterTotalAlkalinity = req.body.MakeUpWaterTotalAlkalinity;
            proposal.MakeUpWaterDetail.ddlMakeUpWaterTotalAlkalinity = req.body.ddlMakeUpWaterTotalAlkalinity;

            proposal.MakeUpWaterDetail.ModifiedDate = req.body.ModifiedDate;
            proposal.MakeUpWaterDetail.IsActive = req.body.IsActive;

            proposal.MakeUpWaterDetail.MakeUpWaterChloride = req.body.MakeUpWaterChloride;
            proposal.MakeUpWaterDetail.ddlMakeUpWaterChloride = req.body.ddlMakeUpWaterChloride;

            proposal.MakeUpWaterDetail.MakeUpWaterSulphates = req.body.MakeUpWaterSulphates;
            proposal.MakeUpWaterDetail.ddlMakeUpWaterSulphates = req.body.ddlMakeUpWaterSulphates;

            proposal.MakeUpWaterDetail.MakeUpWaterSilica = req.body.MakeUpWaterSilica;
            proposal.MakeUpWaterDetail.ddlMakeUpWaterSilica = req.body.ddlMakeUpWaterSilica;

            proposal.MakeUpWaterDetail.MakeUpWaterOtherInfo = req.body.MakeUpWaterOtherInfo;
            proposal.MakeUpWaterDetail.ddlMakeUpWaterOtherInfo = req.body.ddlMakeUpWaterOtherInfo;
            console.log("Data PUT Step1 END");    
        }

            if(step2=="2")
{
    console.log("Data PUT STEP 2");  
            //Circulating Water DEtails
            proposal.CirculatingWaterDetail.ModifiedDate= req.body.ModifiedDate;
            proposal.CirculatingWaterDetail.CreatedDate= req.body.CreatedDate;
            proposal.CirculatingWaterDetail.IsActive= req.body.IsActive;

            proposal.CirculatingWaterDetail.CirculatingWaterPh= req.body.CirculatingWaterPh;
            proposal.CirculatingWaterDetail.ddlCirculatingWaterPh= req.body.ddlCirculatingWaterPh;

            proposal.CirculatingWaterDetail.CirculatingWaterTurbidity= req.body.CirculatingWaterTurbidity;
            proposal.CirculatingWaterDetail.ddlCirculatingWaterTurbidity= req.body.ddlCirculatingWaterTurbidity;
           
            proposal.CirculatingWaterDetail.CirculatingWaterTDS= req.body.CirculatingWaterTDS;
            proposal.CirculatingWaterDetail.ddlCirculatingWaterTDS= req.body.ddlCirculatingWaterTDS;
            
            proposal.CirculatingWaterDetail.CirculatingWaterConductivity= req.body.CirculatingWaterConductivity;
            proposal.CirculatingWaterDetail.ddlCirculatingWaterConductivity= req.body.ddlCirculatingWaterConductivity;

            proposal.CirculatingWaterDetail.CirculatingWaterTotalHardness= req.body.CirculatingWaterTotalHardness;
            proposal.CirculatingWaterDetail.ddlCirculatingWaterTotalHardness= req.body.ddlCirculatingWaterTotalHardness;

            proposal.CirculatingWaterDetail.CirculatingWaterCalciumHardness= req.body.CirculatingWaterCalciumHardness;
            proposal.CirculatingWaterDetail.ddlCirculatingWaterCalciumHardness= req.body.ddlCirculatingWaterCalciumHardness;

            proposal.CirculatingWaterDetail.CirculatingWaterTotalAlkalinity= req.body.CirculatingWaterTotalAlkalinity;
            proposal.CirculatingWaterDetail.ddlCirculatingWaterTotalAlkalinity= req.body.ddlCirculatingWaterTotalAlkalinity;
 
            proposal.CirculatingWaterDetail.CirculatingWaterChloride= req.body.CirculatingWaterChloride;
            proposal.CirculatingWaterDetail.ddlCirculatingWaterChloride= req.body.ddlCirculatingWaterChloride;
 
            proposal.CirculatingWaterDetail.CirculatingWaterSulphates= req.body.CirculatingWaterSulphates;
            proposal.CirculatingWaterDetail.ddlCirculatingWaterSulphates= req.body.ddlCirculatingWaterSulphates;
 
            proposal.CirculatingWaterDetail.CirculatingWaterSilica= req.body.CirculatingWaterSilica;
            proposal.CirculatingWaterDetail.ddlCirculatingWaterSilica= req.body.ddlCirculatingWaterSilica;
 
            proposal.CirculatingWaterDetail.CirculatingWaterPhosphate= req.body.CirculatingWaterPhosphate;
            proposal.CirculatingWaterDetail.ddlCirculatingWaterPhosphate= req.body.ddlCirculatingWaterPhosphate;
 
            proposal.CirculatingWaterDetail.CirculatingWaterZinc= req.body.CirculatingWaterZinc;
            proposal.CirculatingWaterDetail.ddlCirculatingWaterZinc= req.body.ddlCirculatingWaterZinc;

            proposal.CirculatingWaterDetail.CirculatingWaterFreeChlorine= req.body.CirculatingWaterFreeChlorine;
            proposal.CirculatingWaterDetail.ddlCirculatingWaterFreeChlorine= req.body.ddlCirculatingWaterFreeChlorine;

            proposal.CirculatingWaterDetail.CirculatingWaterOtherInfo= req.body.CirculatingWaterOtherInfo;
            proposal.CirculatingWaterDetail.ddlCirculatingWaterOtherInfo= req.body.ddlCirculatingWaterOtherInfo;

            proposal.CirculatingWaterDetail.CirculatingWater= req.body.CirculatingWater;
            proposal.CirculatingWaterDetail.ddlCirculatingWater= req.body.ddlCirculatingWater;
}
            if(step=="3")
{
    console.log("Data PUT STEP 3");  
            // CoolingTowerDetail
            // proposal.CoolingTowerDetail.CreatedDate= req.body.CreatedDate;
            // proposal.CoolingTowerDetail.ModifiedDate= req.body.ModifiedDate;
            // proposal.CoolingTowerDetail.IsActive= req.body.IsActive;

            proposal.CoolingTowerDetail.WaterCirculationRate= req.body.WaterCirculationRate;
            proposal.CoolingTowerDetail.ddlWaterCirculationRate= req.body.ddlWaterCirculationRate;

            proposal.CoolingTowerDetail.TempInlet= req.body.TempInlet;
            proposal.CoolingTowerDetail.ddlTempInlet= req.body.ddlTempInlet;

            proposal.CoolingTowerDetail.TempOutlet= req.body.TempOutlet;
            proposal.CoolingTowerDetail.ddlTempOutlet= req.body.ddlTempOutlet;

            proposal.CoolingTowerDetail.DeltaT= req.body.DeltaT;
            proposal.CoolingTowerDetail.ddlDeltaT= req.body.ddlDeltaT;
            
            proposal.CoolingTowerDetail.Evaporation= req.body.Evaporation;
            proposal.CoolingTowerDetail.ddlEvaporation= req.body.ddlEvaporation;

            proposal.CoolingTowerDetail.BlowDown= req.body.BlowDown;
            proposal.CoolingTowerDetail.ddlBlowDown= req.body.ddlBlowDown;
            
            proposal.CoolingTowerDetail.COC= req.body.COC;
            proposal.CoolingTowerDetail.ddlCOC= req.body.ddlCOC;

            proposal.CoolingTowerDetail.MakeUpWater= req.body.MakeUpWater;
            proposal.CoolingTowerDetail.ddlMakeUpWater= req.body.ddlMakeUpWater;
           
            proposal.CoolingTowerDetail.OperatingHrsPerDay= req.body.OperatingHrsPerDay;
            proposal.CoolingTowerDetail.ddlOperatingHrsPerDay= req.body.ddlOperatingHrsPerDay;

            proposal.CoolingTowerDetail.SideStreamFilterFlow= req.body.SideStreamFilterFlow;
            proposal.CoolingTowerDetail.ddlSideStreamFilterFlow= req.body.ddlSideStreamFilterFlow;
            
            proposal.CoolingTowerDetail.AcidUsedForPhControl= req.body.AcidUsedForPhControl;
            proposal.CoolingTowerDetail.ddlAcidUsedForPhControl= req.body.ddlAcidUsedForPhControl;

            proposal.CoolingTowerDetail.PercentagesAcidUsed= req.body.PercentagesAcidUsed;
            proposal.CoolingTowerDetail.ddlPercentagesAcidUsed= req.body.ddlPercentagesAcidUsed;
            
            proposal.CoolingTowerDetail.CoolingTowerSumpVolume= req.body.CoolingTowerSumpVolume;
            proposal.CoolingTowerDetail.ddlCoolingTowerSumpVolume= req.body.ddlCoolingTowerSumpVolume;

            proposal.CoolingTowerDetail.CoolingTowerCapacityTR= req.body.CoolingTowerCapacityTR;
            proposal.CoolingTowerDetail.ddlCoolingTowerCapacityTR= req.body.ddlCoolingTowerCapacityTR;
            
            proposal.CoolingTowerDetail.CoolingTowerOtherInfo= req.body.CoolingTowerOtherInfo;
            proposal.CoolingTowerDetail.ddlCoolingTowerOtherInfo= req.body.ddlCoolingTowerOtherInfo;
}

            if(step4=="4")
{
    console.log("Data PUT STEP 4");  
           //CoolingTowerOperatingCondition
        //    proposal.CoolingTowerOperatingCondition.CreatedDate= req.body.CreatedDate;
        //    proposal.CoolingTowerOperatingCondition.ModifiedDate= req.body.ModifiedDate;
        //    proposal.CoolingTowerOperatingCondition.IsActive= req.body.IsActive;

           proposal.CoolingTowerOperatingCondition.TestCondition1= req.body.TestCondition1;
           proposal.CoolingTowerOperatingCondition.ddlTestCondition1= req.body.ddlTestCondition1;

           proposal.CoolingTowerOperatingCondition.TestCondition2= req.body.TestCondition2;
           proposal.CoolingTowerOperatingCondition.ddlTestCondition2= req.body.ddlTestCondition2;

           proposal.CoolingTowerOperatingCondition.TestCondition3= req.body.TestCondition3;
           proposal.CoolingTowerOperatingCondition.ddlTestCondition3= req.body.ddlTestCondition3;

           proposal.CoolingTowerOperatingCondition.TestCondition4= req.body.TestCondition4;
           proposal.CoolingTowerOperatingCondition.ddlTestCondition4= req.body.ddlTestCondition4;

           proposal.CoolingTowerOperatingCondition.TestCondition5= req.body.TestCondition5;
           proposal.CoolingTowerOperatingCondition.ddlTestCondition5= req.body.ddlTestCondition5;

           proposal.CoolingTowerOperatingCondition.TestCondition6= req.body.TestCondition6;
           proposal.CoolingTowerOperatingCondition.ddlTestCondition6= req.body.ddlTestCondition6;

           proposal.CoolingTowerOperatingCondition.TestCondition7= req.body.TestCondition7;
           proposal.CoolingTowerOperatingCondition.ddlTestCondition7= req.body.ddlTestCondition7;

           proposal.CoolingTowerOperatingCondition.TestCondition8= req.body.TestCondition8;
           proposal.CoolingTowerOperatingCondition.ddlTestCondition8= req.body.ddlTestCondition8;
}
         if(step5=="5")
{
    console.log("Data PUT STEP 5");  
           //WaterRequirementDetail
        //    proposal.WaterRequirementDetail.CreatedDate= req.body.CreatedDate;
        //    proposal.WaterRequirementDetail.ModifiedDate= req.body.ModifiedDate;
        //    proposal.WaterRequirementDetail.IsActive= req.body.IsActive;

           proposal.WaterRequirementDetail.UsedMakeUpWater= req.body.UsedMakeUpWater;
           proposal.WaterRequirementDetail.ddlUsedMakeUpWater= req.body.ddlUsedMakeUpWater;

           proposal.WaterRequirementDetail.MakeUpDoneProcess= req.body.MakeUpDoneProcess;
           proposal.WaterRequirementDetail.ddlMakeUpDoneProcess= req.body.ddlMakeUpDoneProcess;

           proposal.WaterRequirementDetail.BlowDownQuantity= req.body.BlowDownQuantity;
           proposal.WaterRequirementDetail.ddlBlowDownQuantity= req.body.ddlBlowDownQuantity;

           proposal.WaterRequirementDetail.BlowDownFrequency= req.body.BlowDownFrequency;
           proposal.WaterRequirementDetail.ddlBlowDownFrequency= req.body.ddlBlowDownFrequency;

            // proposal.CreatedDate = req.body.CreatedDate;
           // proposal.ModifiedDate = req.body.ModifiedDate;
            //proposal.IsActive = req.body.IsActive;
           
            console.log(proposal.CreatedDate);
}
console.log("Data PUT STEP END");  
}

        return proposal.save().then(function(){
            //if(!err){ 
                res.send(proposal);
                     //   }
         //  else{ console.log("Error in Transaction Screen Data Saving  : " + JSON.stringify(err,undefined,2));}
        });
    }).catch(next);
});

// //This will post the prouct price data to the url
router.post('/', (req, res)=>
{
    console.log("PostCall")
    var proposalId=1;
    var proposalIdNext="1";
   
    //console.log("Find Call- P"+proposalId.toString());
   // console.log("Find Call- P"+(maxValue + 1).toString());
   ProposalDetails.find().then(function(proposals){
    console.log("Find Call")
    if(!proposals){return res.sendStatus(401);}
  var maxValue=0;
    proposals.forEach(element => {
        console.log("Find Call- element.proposalId");
        var proposalId1= parseInt(element.ProposalId);
       
        if(maxValue< proposalId1)
        {
            maxValue =proposalId1;
        }          
  });
  proposalId= maxValue + 1;
 
  if(proposalId!=null)
  {
    proposalIdNext=proposalId.toString();
  
  }

    //create an object of productDetail model class inside that we have field details of Product Details
    var TSdata = new ProposalDetails(
        {
            ProposalId:proposalIdNext,
            CreatedDate: "",
            ModifiedDate: "",
            IsActive: "",
            TowerDetail:{                
             TowerNumbers : req.body.TowerNumbers,
             TowerName : req.body.TowerName
            // TowerNumbers : req.body.TowerNumbers,
            // TowerName : req.body.TowerName
            
        },

            CirculatingWaterDetail: {
                
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
});

module.exports = router;