import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-registration-step8',
  templateUrl: './registration-step8.component.html',
  styleUrls: ['./registration-step8.component.css']
})
export class RegistrationStep8Component implements OnInit {

  constructor() { }
  @Input() regForm: FormGroup;
  ngOnInit() {
  }
  step8Submitted() {
    this.regForm.get('WaterRequirementDetails').get('Observation1').markAsTouched();
    this.regForm.get('WaterRequirementDetails').get('Observation1').updateValueAndValidity();

    this.regForm.get('WaterRequirementDetails').get('Observation2').markAsTouched();
    this.regForm.get('WaterRequirementDetails').get('Observation2').updateValueAndValidity();

    this.regForm.get('WaterRequirementDetails').get('Observation3').markAsTouched();
    this.regForm.get('WaterRequirementDetails').get('Observation3').updateValueAndValidity();

    this.regForm.get('WaterRequirementDetails').get('Observation4').markAsTouched();
    this.regForm.get('WaterRequirementDetails').get('Observation4').updateValueAndValidity();
  }
}
