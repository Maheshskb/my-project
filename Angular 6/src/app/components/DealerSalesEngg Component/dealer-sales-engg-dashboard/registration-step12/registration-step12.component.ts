import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-step12',
  templateUrl: './registration-step12.component.html',
  styleUrls: ['./registration-step12.component.css']
})
export class RegistrationStep12Component implements OnInit {

  constructor() { }
  @Input() regForm: FormGroup;
  ngOnInit() {
  }
  step12Submitted() {
    this.regForm.get('WaterRequirementDetails').get('Observation1').markAsTouched();
    this.regForm.get('WaterRequirementDetails').get('Observation1').updateValueAndValidity();
  }
}
