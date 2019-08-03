import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterDealerService } from '../../../../Business Services/register-dealer.service';

@Component({
  selector: 'app-dealer-sign-up',
  templateUrl: './dealer-sign-up.component.html',
  styleUrls: ['./dealer-sign-up.component.css'],
  providers: [RegisterDealerService]
})
export class DealerSignUpComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor( private _RegisterDealerService:RegisterDealerService) { }

  ngOnInit() {
  }
  onDealerSubmit(form: NgForm) {
    this._RegisterDealerService.PostDealers(form.value).subscribe(
     res => {
        this.showSucessMessage = true;
       setTimeout(() => this.showSucessMessage = false, 4000);
       this.resetForm(form);
     },
     err => {
       if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
     }
   );
 }

 resetForm(form: NgForm) {
  this._RegisterDealerService.selectedRegisterDealer = {
   _id : '',
   DealerName : '',
   Address : '',
   Email : '',
   ContactNumber : null,
   City : '',
   State : '',
   ContactKeyPerson : '',
   ContactKeyPersonName : '',
   ContactKeyPersonMobileNumber : null,
   GSTnumber : '',
   PANnumber : '',
   OtherDetails : '',
   AreaOfOperation : '',
   EmployeeStrength : '',
   AnyOtherInfo1 : '',
   AnyOtherInfo2 : ''

  };
  form.resetForm();
  this.serverErrorMessages = '';
}
}
