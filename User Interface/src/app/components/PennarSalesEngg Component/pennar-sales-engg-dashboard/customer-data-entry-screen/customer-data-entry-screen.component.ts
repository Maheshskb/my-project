import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm,} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TransactionScreenService } from '../../../../Business Services/transaction-screen.service';
import { GenerateProposalService } from '../../../../Business Services/generate-proposal.service';

@Component({
  selector: 'app-customer-data-entry-screen',
  templateUrl: './customer-data-entry-screen.component.html',
  styleUrls: ['./customer-data-entry-screen.component.css'],
  providers: [GenerateProposalService, TransactionScreenService]
})
export class CustomerDataEntryScreenComponent implements OnInit {

  constructor( private _TransactionScreen:TransactionScreenService, private _GenerateProposal:GenerateProposalService, private router:Router,
    private _toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?:NgForm)
  {
    if(form)
    form.reset();
    this._GenerateProposal.selectedProposalDetails = {
    
             CreatedDate : "",
             ModifiedDate : "",
             IsActive : "",
             TowerDetail : { 
              TowerNumbers : { type : String }, 
              TowerName : { type : String }
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
                CreatedDate:  "",
                ModifiedDate:  "",
                IsActive:  "",
          
                UsedMakeUpWater:  "",
                ddlUsedMakeUpWater: "",

                MakeUpDoneProcess: "",
                ddlMakeUpDoneProcess: "",

                BlowDownQuantity:  "",
                ddlBlowDownQuantity:  "",

                BlowDownFrequency: "",
                ddlBlowDownFrequency: "",

            }
    }
  }

  onSubmit(form : NgForm)
  {
    
  //   this._TransactionScreen.postTowerDetails(form.value).subscribe((_res)=>
  // {
  //     this.resetForm(form);  
  //     this.showAddToaster();
  //   }); 
  // }

  this._GenerateProposal.PostTowerDetail(form.value).subscribe((_res)=>
 {
 //  console.log(form.value);
     this.resetForm(form); 
     this.showAddToaster(); 
    }); 
  }

  OnMakeupWaterSubmission( form : NgForm)
  {
    this._GenerateProposal.PutMakeUpWaterDetail(form.value).subscribe((res)=>{
    this.showAddToaster();
    this.resetForm(form);
    });
  }

  OnProductRecommendation( form : NgForm)
  {

    this._GenerateProposal.GetRecommendedProducts(form.value).subscribe((res)=>{
    this.showAddToaster();
    this.resetForm(form);
    });
  }


  
  // code to toast notification
  showDeleteToaster(){
    this._toastr.warning("Record is deleted successfully.")
  }

showAddToaster(){
  this._toastr.success("Records are added successfully!")
}
 ShowEditToaster()
 {
   this._toastr.info("Record Updated Successfully");
 }

}
