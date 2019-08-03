import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-registration-step6',
  templateUrl: './registration-step6.component.html',
  styleUrls: ['./registration-step6.component.css']
})
export class RegistrationStep6Component implements OnInit {

  constructor() { }
  @Input() regForm: FormGroup;
  ngOnInit() {
  }
  step6Submitted() {
    this.regForm.get('CoolingTowerDetails').get('WaterCirculationRate').markAsTouched();
    this.regForm.get('CoolingTowerDetails').get('WaterCirculationRate').updateValueAndValidity();

    this.regForm.get('CoolingTowerDetails').get('CoolingTowerTempOutlet').markAsTouched();
    this.regForm.get('CoolingTowerDetails').get('CoolingTowerTempOutlet').updateValueAndValidity();
    
    this.regForm.get('CoolingTowerDetails').get('CoolingTowerTempInlet').markAsTouched();
    this.regForm.get('CoolingTowerDetails').get('CoolingTowerTempInlet').updateValueAndValidity();
    
    this.regForm.get('CoolingTowerDetails').get('DeltaT').markAsTouched();
    this.regForm.get('CoolingTowerDetails').get('DeltaT').updateValueAndValidity();
    
    this.regForm.get('CoolingTowerDetails').get('Evaporation').markAsTouched();
    this.regForm.get('CoolingTowerDetails').get('Evaporation').updateValueAndValidity();
    
    this.regForm.get('CoolingTowerDetails').get('BlowDown').markAsTouched();
    this.regForm.get('CoolingTowerDetails').get('BlowDown').updateValueAndValidity();
    
    this.regForm.get('CoolingTowerDetails').get('COC').markAsTouched();
    this.regForm.get('CoolingTowerDetails').get('COC').updateValueAndValidity();
    
    this.regForm.get('CoolingTowerDetails').get('MakeupWater').markAsTouched();
    this.regForm.get('CoolingTowerDetails').get('MakeupWater').updateValueAndValidity();
    
    this.regForm.get('CoolingTowerDetails').get('DailyOperatingHrs').markAsTouched();
    this.regForm.get('CoolingTowerDetails').get('DailyOperatingHrs').updateValueAndValidity();
    
    this.regForm.get('CoolingTowerDetails').get('SideStreamFilterFlow').markAsTouched();
    this.regForm.get('CoolingTowerDetails').get('SideStreamFilterFlow').updateValueAndValidity();
    
    this.regForm.get('CoolingTowerDetails').get('AcidUsed4pHcontrol').markAsTouched();
    this.regForm.get('CoolingTowerDetails').get('AcidUsed4pHcontrol').updateValueAndValidity();
    
    this.regForm.get('CoolingTowerDetails').get('AcidPercentUsed').markAsTouched();
    this.regForm.get('CoolingTowerDetails').get('AcidPercentUsed').updateValueAndValidity();
    
    this.regForm.get('CoolingTowerDetails').get('SumpVolume').markAsTouched();
    this.regForm.get('CoolingTowerDetails').get('SumpVolume').updateValueAndValidity();
    
    this.regForm.get('CoolingTowerDetails').get('Capacity_TR').markAsTouched();
    this.regForm.get('CoolingTowerDetails').get('Capacity_TR').updateValueAndValidity();
    
    this.regForm.get('CoolingTowerDetails').get('CT_AnyOther1').markAsTouched();
    this.regForm.get('CoolingTowerDetails').get('CT_AnyOther1').updateValueAndValidity();
    
    this.regForm.get('CoolingTowerDetails').get('CT_AnyOther2').markAsTouched();
    this.regForm.get('CoolingTowerDetails').get('CT_AnyOther2').updateValueAndValidity();
    
  }
}
