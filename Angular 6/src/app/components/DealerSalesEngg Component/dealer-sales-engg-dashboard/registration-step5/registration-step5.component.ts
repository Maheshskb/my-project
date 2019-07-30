import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-registration-step5',
  templateUrl: './registration-step5.component.html',
  styleUrls: ['./registration-step5.component.css']
})
export class RegistrationStep5Component implements OnInit {

  constructor() { }
  @Input() regForm: FormGroup;
  ngOnInit() {
  }
  step5Submitted() {
    this.regForm.get('CirculatingWaterDetails').get('cw_pH').markAsTouched();
    this.regForm.get('CirculatingWaterDetails').get('cw_pH').updateValueAndValidity();

    this.regForm.get('CirculatingWaterDetails').get('cw_turbidity').markAsTouched();
    this.regForm.get('CirculatingWaterDetails').get('cw_turbidity').updateValueAndValidity();

    this.regForm.get('CirculatingWaterDetails').get('cw_TDS').markAsTouched();
    this.regForm.get('CirculatingWaterDetails').get('cw_TDS').updateValueAndValidity();

    this.regForm.get('CirculatingWaterDetails').get('cw_Conductivity').markAsTouched();
    this.regForm.get('CirculatingWaterDetails').get('cw_Conductivity').updateValueAndValidity();

    this.regForm.get('CirculatingWaterDetails').get('cw_TotalHardness').markAsTouched();
    this.regForm.get('CirculatingWaterDetails').get('cw_TotalHardness').updateValueAndValidity();

    this.regForm.get('CirculatingWaterDetails').get('cw_CalciumHardness').markAsTouched();
    this.regForm.get('CirculatingWaterDetails').get('cw_CalciumHardness').updateValueAndValidity();

    this.regForm.get('CirculatingWaterDetails').get('cw_TotalAlkalinity').markAsTouched();
    this.regForm.get('CirculatingWaterDetails').get('cw_TotalAlkalinity').updateValueAndValidity();

    this.regForm.get('CirculatingWaterDetails').get('cw_Chloride').markAsTouched();
    this.regForm.get('CirculatingWaterDetails').get('cw_Chloride').updateValueAndValidity();

    this.regForm.get('CirculatingWaterDetails').get('cw_Sulphates').markAsTouched();
    this.regForm.get('CirculatingWaterDetails').get('cw_Sulphates').updateValueAndValidity();

    this.regForm.get('CirculatingWaterDetails').get('cw_Silica').markAsTouched();
    this.regForm.get('CirculatingWaterDetails').get('cw_Silica').updateValueAndValidity();

    this.regForm.get('CirculatingWaterDetails').get('cw_phosphate').markAsTouched();
    this.regForm.get('CirculatingWaterDetails').get('cw_phosphate').updateValueAndValidity();

    this.regForm.get('CirculatingWaterDetails').get('cw_zinc').markAsTouched();
    this.regForm.get('CirculatingWaterDetails').get('cw_zinc').updateValueAndValidity();

    this.regForm.get('CirculatingWaterDetails').get('cw_AnyOther1').markAsTouched();
    this.regForm.get('CirculatingWaterDetails').get('cw_AnyOther1').updateValueAndValidity();

    this.regForm.get('CirculatingWaterDetails').get('cw_AnyOther2').markAsTouched();
    this.regForm.get('CirculatingWaterDetails').get('cw_AnyOther2').updateValueAndValidity();
  }
}
