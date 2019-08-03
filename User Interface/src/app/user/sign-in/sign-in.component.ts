import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { AdminService } from '../../Business Services/Admin.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [AdminService]
})
export class SignInComponent implements OnInit {

  constructor(private userService: AdminService,private router : Router) { }

  model ={
    email :'',
    password:''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
  ngOnInit() {
    //if(this.userService.isLoggedIn())
    // this.router.navigateByUrl('/userprofile');
    //this.router.navigateByUrl('/adminDashboard');
  }

  onSubmit(form : NgForm){
    this.userService.login(form.value).subscribe(
      res => {
        this.userService.setToken(res['token']);
        // this.router.navigateByUrl('/userprofile');
        this.router.navigateByUrl('/adminDashboard');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }
}