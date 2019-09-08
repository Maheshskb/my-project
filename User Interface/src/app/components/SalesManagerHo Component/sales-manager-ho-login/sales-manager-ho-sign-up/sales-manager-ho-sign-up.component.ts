import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterSalesManagerHoService } from '../../../../Business Services/register-sales-manager-ho.service';

@Component({
  selector: 'app-sales-manager-ho-sign-up',
  templateUrl: './sales-manager-ho-sign-up.component.html',
  styleUrls: ['./sales-manager-ho-sign-up.component.css'],
  providers:[RegisterSalesManagerHoService]
})
export class SalesManagerHoSignUpComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor( private _RegisterSalesManagerHoService : RegisterSalesManagerHoService) { }

  ngOnInit() {
  }
onSalesMangerHOSubmit(form: NgForm) {
    this._RegisterSalesManagerHoService.PostSalesManagerHO(form.value).subscribe(
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
  this._RegisterSalesManagerHoService.selectedSalesManagerHOLogin = {
   _id : '',
  FirstName : '',
  Email : '',
  Password : ''

  };
  form.resetForm();
  this.serverErrorMessages = '';
}
}
