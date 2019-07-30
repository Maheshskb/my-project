import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-step9',
  templateUrl: './registration-step9.component.html',
  styleUrls: ['./registration-step9.component.css']
})
export class RegistrationStep9Component implements OnInit {

  constructor() { }
  @Input() regForm: FormGroup;
  ngOnInit() {
  }
  step9Submitted() {
    this.regForm.get('CoolingSystemPhotoDetails').get('CorrosionPhoto').markAsTouched();
    this.regForm.get('CoolingSystemPhotoDetails').get('CorrosionPhoto').updateValueAndValidity();

    this.regForm.get('CoolingSystemPhotoDetails').get('ScaleFoulingPhoto').markAsTouched();
    this.regForm.get('CoolingSystemPhotoDetails').get('ScaleFoulingPhoto').updateValueAndValidity();

    this.regForm.get('CoolingSystemPhotoDetails').get('BioGrowthAlagePhoto').markAsTouched();
    this.regForm.get('CoolingSystemPhotoDetails').get('BioGrowthAlagePhoto').updateValueAndValidity();

    this.regForm.get('CoolingSystemPhotoDetails').get('AnyOtherFirstPhoto').markAsTouched();
    this.regForm.get('CoolingSystemPhotoDetails').get('AnyOtherFirstPhoto').updateValueAndValidity();

    this.regForm.get('CoolingSystemPhotoDetails').get('AnyOtherSecondPhoto').markAsTouched();
    this.regForm.get('CoolingSystemPhotoDetails').get('AnyOtherSecondPhoto').updateValueAndValidity();
  }
}
