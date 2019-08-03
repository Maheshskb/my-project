import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-step7',
  templateUrl: './registration-step7.component.html',
  styleUrls: ['./registration-step7.component.css']
})
export class RegistrationStep7Component implements OnInit {

  constructor() { }
  @Input() regForm: FormGroup;
  ngOnInit() {
  }
  step7Submitted() {
  this.regForm.get('CoolingTowerOperatingCondition').get('Test1').markAsTouched();
  this.regForm.get('CoolingTowerOperatingCondition').get('Test1').updateValueAndValidity();

  this.regForm.get('CoolingTowerOperatingCondition').get('Test2').markAsTouched();
  this.regForm.get('CoolingTowerOperatingCondition').get('Test2').updateValueAndValidity();

  this.regForm.get('CoolingTowerOperatingCondition').get('Test3').markAsTouched();
  this.regForm.get('CoolingTowerOperatingCondition').get('Test3').updateValueAndValidity();

  this.regForm.get('CoolingTowerOperatingCondition').get('Test4').markAsTouched();
  this.regForm.get('CoolingTowerOperatingCondition').get('Test4').updateValueAndValidity();

  this.regForm.get('CoolingTowerOperatingCondition').get('Test5').markAsTouched();
  this.regForm.get('CoolingTowerOperatingCondition').get('Test5').updateValueAndValidity();

  this.regForm.get('CoolingTowerOperatingCondition').get('Test6').markAsTouched();
  this.regForm.get('CoolingTowerOperatingCondition').get('Test6').updateValueAndValidity();

  this.regForm.get('CoolingTowerOperatingCondition').get('Observation').markAsTouched();
  this.regForm.get('CoolingTowerOperatingCondition').get('Observation').updateValueAndValidity();

  this.regForm.get('CoolingTowerOperatingCondition').get('Comments').markAsTouched();
  this.regForm.get('CoolingTowerOperatingCondition').get('Comments').updateValueAndValidity();

  // this.regForm.get('CoolingTowerOperatingCondition').get('').markAsTouched();
  // this.regForm.get('CoolingTowerOperatingCondition').get('').updateValueAndValidity();
  }
}
