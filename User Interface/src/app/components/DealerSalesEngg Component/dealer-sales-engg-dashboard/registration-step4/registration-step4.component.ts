import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-registration-step4',
  templateUrl: './registration-step4.component.html',
  styleUrls: ['./registration-step4.component.css']
})
export class RegistrationStep4Component implements OnInit {
 //declare an array of customer
 Units=["u1","u2","u3"];

  constructor() { }
  @Input() regForm: FormGroup;
  ngOnInit() {
  //   alert($(document).getElementById("hidden_number").value);
   
  //   $(document).ready(function () {
  //     // alert("Hello");
  //    var value2 =  localStorage["TWO"];
      
          
  //         alert(value2);
        
  //         alert(this.getElementById("hidden_number").value);

  // });

  }
  step4Submitted() {
    this.regForm.get('MakeUpWaterDetails').get('SourceOfWater').markAsTouched();
    this.regForm.get('MakeUpWaterDetails').get('SourceOfWater').updateValueAndValidity();

    this.regForm.get('MakeUpWaterDetails').get('pH').markAsTouched();
    this.regForm.get('MakeUpWaterDetails').get('pH').updateValueAndValidity();

    this.regForm.get('MakeUpWaterDetails').get('Turbidity').markAsTouched();
    this.regForm.get('MakeUpWaterDetails').get('Turbidity').updateValueAndValidity();

    this.regForm.get('MakeUpWaterDetails').get('TDS').markAsTouched();
    this.regForm.get('MakeUpWaterDetails').get('TDS').updateValueAndValidity();

    this.regForm.get('MakeUpWaterDetails').get('Conductivity').markAsTouched();
    this.regForm.get('MakeUpWaterDetails').get('Conductivity').updateValueAndValidity();

    this.regForm.get('MakeUpWaterDetails').get('TotalHardness').markAsTouched();
    this.regForm.get('MakeUpWaterDetails').get('TotalHardness').updateValueAndValidity();

    this.regForm.get('MakeUpWaterDetails').get('CalciumHardness').markAsTouched();
    this.regForm.get('MakeUpWaterDetails').get('CalciumHardness').updateValueAndValidity();

    this.regForm.get('MakeUpWaterDetails').get('TotalAlkalinity').markAsTouched();
    this.regForm.get('MakeUpWaterDetails').get('TotalAlkalinity').updateValueAndValidity();

    this.regForm.get('MakeUpWaterDetails').get('Chloride').markAsTouched();
    this.regForm.get('MakeUpWaterDetails').get('Chloride').updateValueAndValidity();

    this.regForm.get('MakeUpWaterDetails').get('Sulphates').markAsTouched();
    this.regForm.get('MakeUpWaterDetails').get('Sulphates').updateValueAndValidity();

    this.regForm.get('MakeUpWaterDetails').get('Silica').markAsTouched();
    this.regForm.get('MakeUpWaterDetails').get('Silica').updateValueAndValidity();

    this.regForm.get('MakeUpWaterDetails').get('AnyOther1').markAsTouched();
    this.regForm.get('MakeUpWaterDetails').get('AnyOther1').updateValueAndValidity();

    this.regForm.get('MakeUpWaterDetails').get('AnyOther2').markAsTouched();
    this.regForm.get('MakeUpWaterDetails').get('AnyOther2').updateValueAndValidity();
    // alert(document.getElementById("hidden_number").nodeValue);
     
  }
  

}
