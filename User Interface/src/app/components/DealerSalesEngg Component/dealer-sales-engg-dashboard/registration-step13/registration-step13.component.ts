import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-step13',
  templateUrl: './registration-step13.component.html',
  styleUrls: ['./registration-step13.component.css']
})
export class RegistrationStep13Component implements OnInit {

  constructor() { }
  @Input() regForm: FormGroup;
  ngOnInit() {
  }
  step13Submitted() {
    this.regForm.get('').get('').markAsTouched();
    this.regForm.get('').get('').updateValueAndValidity();
  }
}
