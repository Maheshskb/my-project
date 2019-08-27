import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment} from '../../environments/environment';
import { ProposalDetails } from '../../../../Data Access Layer/models/ProposalModels/ProposalDetails.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GenerateProposalService {
  selectedProposalDetails: ProposalDetails;
  PD: ProposalDetails[];
  readonly baseURL = 'http://localhost:3000/ProposalDetails';
  constructor(private http:HttpClient) { }

  PostTowerDetail(TSdata : ProposalDetails)
  {
    // return this.http.post(this.baseURL, TSdata);
    return this.http.post(environment.apiBaseUrl+'/ProposalDetails',TSdata);
  }

 PutMakeUpWaterDetail(TSdata : ProposalDetails)
  {
    TSdata.StepNumber2="2";
    TSdata.StepNumber="2";
    console.log("ServiCe Call :"+TSdata.StepNumber);
    return this.http.put(environment.apiBaseUrl+'/ProposalDetails' ,TSdata);
  }

  //Cooling Tower Details Put Method call
  PutCoolingToerDetail(TSdata : ProposalDetails)
  {
    TSdata.StepNumber1="1";
    TSdata.StepNumber="1";
    console.log("ServiCe Call :"+TSdata.StepNumber);
    return this.http.put(environment.apiBaseUrl+'/ProposalDetails' ,TSdata);
  }

  PutCoolingTowerOperatingConditionDetail(TSdata : ProposalDetails)
  {
    TSdata.StepNumber4="4";
    // TSdata.StepNumber="1";
    console.log("ServiCe Call :"+TSdata.StepNumber);
    return this.http.put(environment.apiBaseUrl+'/ProposalDetails' ,TSdata);
  }

  PutCirculatingWaterDetails(TSdata : ProposalDetails)
  {
    // TSdata.StepNumberCirculatingWater = "1";
    TSdata.StepNumber3="3";
    TSdata.StepNumber="3";
    return this.http.put(environment.apiBaseUrl+'/ProposalDetails' ,TSdata);
  }

  //PutWaterRequirementDetail
  PutWaterRequirementDetail(TSdata : ProposalDetails)
  {
    // TSdata.StepNumberCirculatingWater = "1";
    TSdata.StepNumber5="5";
    return this.http.put(environment.apiBaseUrl+'/ProposalDetails' ,TSdata);
  }

  GetRecommendedProducts(TSdata : ProposalDetails)
  {
    //Bioside Selection    
    var COCTaken=  Number(TSdata.CirculatingWaterTotalHardness)/  Number(TSdata.MakeUpWaterTotalHardness);
    var BD = Number(TSdata.Evaporation)/(COCTaken-1);
    var HF = 0.693 * (Number(TSdata.CoolingTowerSumpVolume));
    var halfLife = HF/BD;
    var Products = new Map();
    var IsTowerMaintenanceProper = (TSdata.IsTowerMaintenanceProper=="" || TSdata.IsTowerMaintenanceProper=="No")?1 :0;
    var IsAlgaeSeenOnTower=(TSdata.IsAlgaeSeenOnTower==""||TSdata.IsAlgaeSeenOnTower=="Yes")?1:0 ;
    var IsSlimeInTower=(TSdata.IsSlimeInTower==""|| TSdata.IsSlimeInTower=="Yes")?1:0;
    var IsSumpWaterTurbidity=(TSdata.IsSumpWaterTurbidity=="" || TSdata.IsSumpWaterTurbidity=="Yes")?1:0;
    var IsThereAnyContamination=(TSdata.IsThereAnyContamination=="" ||TSdata.IsThereAnyContamination=="Yes")?1:0;
    var maintScore = IsTowerMaintenanceProper+IsAlgaeSeenOnTower+IsSlimeInTower+IsSumpWaterTurbidity+IsThereAnyContamination;
  
    if(maintScore>2)
    {
    if(halfLife>8)
    {
      var dosage=0;
     if( TSdata.SourceOfWater=="RO" || TSdata.SourceOfWater=="Softner")
     {        
         dosage= 125;       
     }
     else  if( TSdata.SourceOfWater!="RO" || TSdata.SourceOfWater!="Softner")
     {     
       dosage= 100;
     }
     var frequency= TSdata.BlowDownFrequency// Has been taken from WaterRequirement- fortnighty;
     var obj1: {[k: string]: any} = {Frequency:frequency,Dosage:dosage};
     var obj2: {[k: string]: any} = {Frequency:frequency,Dosage:dosage};
     Products.set("Penetrate 3460",obj1);
     Products.set("Penetrate 3470",obj2);
    }
   

    if(halfLife<8)
    {
      var dosage=0;
     if( TSdata.SourceOfWater=="RO" || TSdata.SourceOfWater=="Softner")
     {        
         dosage= 125;       
     }
     else  if( TSdata.SourceOfWater!="RO" || TSdata.SourceOfWater!="Softner")
     {     
       dosage= 100;
     }
     var frequency= TSdata.BlowDownFrequency// Has been taken from WaterRequirement- fortnighty;
     var obj1: {[k: string]: any} = {Frequency:frequency,Dosage:dosage};
     var obj2: {[k: string]: any} = {Frequency:frequency,Dosage:dosage};
     Products.set("Penetrate 3474",obj1);
     Products.set("Penetrate 3474",obj2);
    }
  }

  else if(maintScore<=2)
  {
    if(halfLife>8)
    {
      var dosage=0;
     if( TSdata.SourceOfWater=="RO" || TSdata.SourceOfWater=="Softner")
     {        
         dosage= 125;       
     }
     else  if( TSdata.SourceOfWater!="RO" || TSdata.SourceOfWater!="Softner")
     {     
       dosage= 100;
     }
     var frequency= TSdata.BlowDownFrequency// Has been taken from WaterRequirement- fortnighty;
     var obj3: {[k: string]: any} = {Frequency:frequency,Dosage:"30"};
     Products.set("Pennoxide",obj3);
     var obj1: {[k: string]: any} = {Frequency:frequency,Dosage:dosage};
     var obj2: {[k: string]: any} = {Frequency:frequency,Dosage:dosage};
     Products.set("Penetrate 3460",obj1);
     Products.set("Penetrate 3470",obj2);
     Products.set("Pennoxide",obj3);
    }
   

    if(halfLife<8)
    {
        var dosage=0;
      if( TSdata.SourceOfWater=="RO" || TSdata.SourceOfWater=="Softner")
      {        
          dosage= 125;       
      }
      else  if( TSdata.SourceOfWater!="RO" || TSdata.SourceOfWater!="Softner")
      {     
        dosage= 100;
      }
      var frequency= TSdata.BlowDownFrequency// Has been taken from WaterRequirement- fortnighty;
      var obj1: {[k: string]: any} = {Frequency:frequency,Dosage:dosage};
      var obj2: {[k: string]: any} = {Frequency:frequency,Dosage:dosage};
      Products.set("Penetrate 3474",obj1);
      Products.set("Penetrate 3474",obj2);
      var obj3: {[k: string]: any} = {Frequency:frequency,Dosage:"30"};
      Products.set("Pennoxide",obj3);
    }
  }
  
    // TSdata.Step="1";
    TSdata.StepNumber="1";
    // return this.http.put(this.baseURL, TSdata);
    return this.http.put(environment.apiBaseUrl+'/ProposalDetails' ,TSdata);
  }


 
}
