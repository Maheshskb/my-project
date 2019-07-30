import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-dealer-sales-engg-dashboard',
  templateUrl: './dealer-sales-engg-dashboard.component.html',
  styleUrls: ['./dealer-sales-engg-dashboard.component.css']
})
export class DealerSalesEnggDashboardComponent implements OnInit {

  constructor() { }
  NewCustomerRegistrationForm: FormGroup;

  ngOnInit() {
    this.NewCustomerRegistrationForm = new FormGroup({
     'CustomerDetails': new FormGroup({
        // 'CompanyName': new FormControl(null, Validators.required),
        'CompanyName': new FormControl(null),
        'CityName': new FormControl(null),
        'Address': new FormControl(null),
        'Pincode': new FormControl(null),
        'DealerCode': new FormControl(null),
        'IndusrtyType': new FormControl(null),
        'CustOtherInfo': new FormControl(null),
        'GSTno': new FormControl(null),
        'ContactPersonName': new FormControl(null),
        'Designation': new FormControl(null),
        'FisrtEmail': new FormControl(null),
        'SecondEmail': new FormControl(null),
        'OfficeNumber': new FormControl(null),
        'MobileNumber': new FormControl(null),
        'MoreContacts': new FormControl(null),
        'CustProdctPotential': new FormControl(null),
        'ChooseProductPraposal':new FormControl(null),
        'EnquireyNature':new FormControl(null),
        'NumOfTower': new FormControl(null),
        'NameOfTower': new FormControl(null)
      }),

      'TowerDetails': new FormGroup({
        'NumOfTower': new FormControl(null, [Validators.required]),
        'NameOfTower': new FormControl(null)
      }),
      'MakeUpWaterDetails': new FormGroup({
        'SourceOfWater':new FormControl(null),
        'pH':new FormControl(null),
        'Turbidity':new FormControl(null),
        'TDS':new FormControl(null),
        'Conductivity':new FormControl(null),
        'TotalHardness':new FormControl(null),
        'CalciumHardness':new FormControl(null),
        'TotalAlkalinity':new FormControl(null),
        'Chloride':new FormControl(null),
        'Sulphates':new FormControl(null),
        'Silica':new FormControl(null),
        'AnyOther1':new FormControl(null),
        'AnyOther2':new FormControl(null),
      }),
      'CirculatingWaterDetails': new FormGroup({
        'cw_pH':new FormControl(null),
        'cw_turbidity':new FormControl(null),
        'cw_TDS':new FormControl(null),
        'cw_Conductivity':new FormControl(null),
        'cw_TotalHardness':new FormControl(null),
        'cw_CalciumHardness':new FormControl(null),
        'cw_TotalAlkalinity':new FormControl(null),
        'cw_Chloride':new FormControl(null),
        'cw_Sulphates':new FormControl(null),
        'cw_Silica':new FormControl(null),
        'cw_phosphate':new FormControl(null),
        'cw_zinc':new FormControl(null),
        'cw_AnyOther1':new FormControl(null),
        'cw_AnyOther2':new FormControl(null),
      }),
      'CoolingTowerDetails': new FormGroup({
        'WaterCirculationRate':new FormControl(null),
        'CoolingTowerTempOutlet':new FormControl(null),
        'CoolingTowerTempInlet':new FormControl(null),
        'DeltaT':new FormControl(null),
        'Evaporation':new FormControl(null),
        'BlowDown':new FormControl(null),
        'COC':new FormControl(null),
        'MakeupWater':new FormControl(null),
        'DailyOperatingHrs':new FormControl(null),
        'SideStreamFilterFlow	':new FormControl(null),
        'AcidUsed4pHcontrol':new FormControl(null),
        'AcidPercentUsed':new FormControl(null),
        'SumpVolume':new FormControl(null),
        'Capacity_TR':new FormControl(null),
        'CT_AnyOther1':new FormControl(null),
        'CT_AnyOther2':new FormControl(null),
      }),
      'CoolingTowerOperatingCondition': new FormGroup({
        'Test1':new FormControl(null),
        'Test2':new FormControl(null),
        'Test3':new FormControl(null),
        'Test4':new FormControl(null),
        'Test5':new FormControl(null),
        'Test6':new FormControl(null),
        'Observation':new FormControl(null),
        'Comments':new FormControl(null),
      }),
      'WaterRequirementDetails': new FormGroup({
        'Observation1':new FormControl(null),
        'Observation2':new FormControl(null),
        'Observation3':new FormControl(null),
        'Observation4':new FormControl(null),
      }),
      'CoolingSystemPhotoDetails': new FormGroup({
        'CorrosionPhoto':new FormControl(null),
        'ScaleFoulingPhoto':new FormControl(null),
        'BioGrowthAlagePhoto':new FormControl(null),
        'AnyOtherFirstPhoto':new FormControl(null),
        'AnyOtherSecondPhoto':new FormControl(null),
      }),
      'PresentTreatmentDetails': new FormGroup({
        'SupplierName':new FormControl(null),
        'ProductName':new FormControl(null),
        'Dose':new FormControl(null),
        'Unit':new FormControl(null),
        'Price':new FormControl(null),
      }),
      'ProductRecommendation': new FormGroup({
        'CoolingSystem':new FormControl(null),
        'MakeUp':new FormControl(null),
        'COC':new FormControl(null),
        'BlowDown':new FormControl(null),
        'HoldUp':new FormControl(null),
        'HalfLife':new FormControl(null),
        'SystemAnalysis':new FormControl(null),
        'ScalingPotential':new FormControl(null),
        'FoulingPotential':new FormControl(null),
        'BiofolingPotential':new FormControl(null)
      }),
      'ModifyProductRecommendation': new FormGroup({
        'MakeUp':new FormControl(null),
        'COC':new FormControl(null),
        'BlowDown':new FormControl(null),
        'HoldUp':new FormControl(null),
        'HalfLife':new FormControl(null),
      }),
      'GenerateProposal': new FormGroup({
        'MakeUp':new FormControl(null),
        'COC':new FormControl(null),
        'BlowDown':new FormControl(null),
        'HoldUp':new FormControl(null),
        'HalfLife':new FormControl(null),
      }),
    });

  }

}
