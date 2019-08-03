import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-step11',
  templateUrl: './registration-step11.component.html',
  styleUrls: ['./registration-step11.component.css']
})
export class RegistrationStep11Component implements OnInit {

  constructor() { }
  @Input() regForm: FormGroup;
  ngOnInit() {
  }
  step11Submitted() {
    this.regForm.get('ProductRecommendation').get('CoolingSystem').markAsTouched();
    this.regForm.get('ProductRecommendation').get('CoolingSystem').updateValueAndValidity();

    this.regForm.get('ProductRecommendation').get('MakeUp').markAsTouched();
    this.regForm.get('ProductRecommendation').get('MakeUp').updateValueAndValidity();

    this.regForm.get('ProductRecommendation').get('COC').markAsTouched();
    this.regForm.get('ProductRecommendation').get('COC').updateValueAndValidity();

    this.regForm.get('ProductRecommendation').get('BlowDown').markAsTouched();
    this.regForm.get('ProductRecommendation').get('BlowDown').updateValueAndValidity();

    this.regForm.get('ProductRecommendation').get('HoldUp').markAsTouched();
    this.regForm.get('ProductRecommendation').get('HoldUp').updateValueAndValidity();

    this.regForm.get('ProductRecommendation').get('HalfLife').markAsTouched();
    this.regForm.get('ProductRecommendation').get('HalfLife').updateValueAndValidity();

    this.regForm.get('ProductRecommendation').get('SystemAnalysis').markAsTouched();
    this.regForm.get('ProductRecommendation').get('SystemAnalysis').updateValueAndValidity();

    this.regForm.get('ProductRecommendation').get('ScalingPotential').markAsTouched();
    this.regForm.get('ProductRecommendation').get('ScalingPotential').updateValueAndValidity();

    this.regForm.get('ProductRecommendation').get('FoulingPotential').markAsTouched();
    this.regForm.get('ProductRecommendation').get('FoulingPotential').updateValueAndValidity();

    this.regForm.get('ProductRecommendation').get('BiofolingPotential').markAsTouched();
    this.regForm.get('ProductRecommendation').get('BiofolingPotential').updateValueAndValidity();
  }
}
