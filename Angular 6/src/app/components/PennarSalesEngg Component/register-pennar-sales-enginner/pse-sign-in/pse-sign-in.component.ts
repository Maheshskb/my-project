import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { RegisterPennarSalesEnginnerService} from '../../Shared/register-pennar-sales-enginner.service';

@Component({
  selector: 'app-pse-sign-in',
  templateUrl: './pse-sign-in.component.html',
  styleUrls: ['./pse-sign-in.component.css'],
  providers:[]
})
export class PseSignInComponent implements OnInit {

  constructor( private _RegisterPennarSalesEnginnerService:RegisterPennarSalesEnginnerService, private router : Router ) { }

  model ={
    Email :'',
    Password:''
  };

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;

  ngOnInit() {
  }
  onPSESubmit(form : NgForm){
    this._RegisterPennarSalesEnginnerService.PennarSalesEnggLogin(form.value).subscribe(
     res => {
        this._RegisterPennarSalesEnginnerService.setToken(res['token']);
        this.router.navigateByUrl('/PennarSalesEnggDashboard');
        },
     err => {
       this.serverErrorMessages = err.error.message;
     }
   );
}

}
