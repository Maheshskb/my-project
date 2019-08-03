import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { DealerSalesEnggService} from '../../shared/dealer-sales-engg.service';

@Component({
  selector: 'app-dse-sign-in',
  templateUrl: './dse-sign-in.component.html',
  styleUrls: ['./dse-sign-in.component.css'],
   providers: [DealerSalesEnggService]
})
export class DseSignInComponent implements OnInit {

  constructor( private _DealerSalesEnggService : DealerSalesEnggService, private router : Router ) { }
  
  model ={
    DSEemail :'',
    DSEpassword:''
  };

 emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;

  ngOnInit() {
    // if(this._DealerSalesEnggService.isLoggedIn())
    // this.router.navigateByUrl('/DealerSalesEnggDashboard');
  }

  onDSESubmit(form : NgForm){
      this._DealerSalesEnggService.DealerSalesEnggLogin(form.value).subscribe(
       res => {
          this._DealerSalesEnggService.setToken(res['token']);
          this.router.navigateByUrl('/DealerSalesEnggDashboard');
          },
       err => {
         this.serverErrorMessages = err.error.message;
       }
     );
  }


  // Method for login with hard coded login credentials
//   loginDealerSalesEngg(e)
// {
// e.preventDefault();
// console.log(e);
// var DSEemail = e.target.elements[0].value;
// var DSEpassword = e.target.elements[1].value;
// // console.log(DSEemail, DSEpassword);
// // return false;
// if(DSEemail =="admin" && DSEpassword=="admin")
// {
//   this.router.navigate(['/DealerSalesEnggDashboard'])
// }
// }

// LoginDealerSalesEng(e)
// {
  
// }

}
