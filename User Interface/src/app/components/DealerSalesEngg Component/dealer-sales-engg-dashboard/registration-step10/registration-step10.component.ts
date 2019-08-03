import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-step10',
  templateUrl: './registration-step10.component.html',
  styleUrls: ['./registration-step10.component.css']
})
export class RegistrationStep10Component implements OnInit {

  constructor() { }
  @Input() regForm: FormGroup;
  ngOnInit() {
  }
  step10Submitted() {
    this.regForm.get('PresentTreatmentDetails').get('SupplierName').markAsTouched();
    this.regForm.get('PresentTreatmentDetails').get('SupplierName').updateValueAndValidity();

    this.regForm.get('PresentTreatmentDetails').get('ProductName').markAsTouched();
    this.regForm.get('PresentTreatmentDetails').get('ProductName').updateValueAndValidity();

    this.regForm.get('PresentTreatmentDetails').get('Dose').markAsTouched();
    this.regForm.get('PresentTreatmentDetails').get('Dose').updateValueAndValidity();

    this.regForm.get('PresentTreatmentDetails').get('Unit').markAsTouched();
    this.regForm.get('PresentTreatmentDetails').get('Unit').updateValueAndValidity();

    this.regForm.get('PresentTreatmentDetails').get('Price').markAsTouched();
    this.regForm.get('PresentTreatmentDetails').get('Price').updateValueAndValidity();
  }
}
