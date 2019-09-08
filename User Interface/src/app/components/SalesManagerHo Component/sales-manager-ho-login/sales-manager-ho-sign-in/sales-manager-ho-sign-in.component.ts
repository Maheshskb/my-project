import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales-manager-ho-sign-in',
  templateUrl: './sales-manager-ho-sign-in.component.html',
  styleUrls: ['./sales-manager-ho-sign-in.component.css']
})
export class SalesManagerHoSignInComponent implements OnInit {
  Email : String;
  Password : String;
  constructor( private router : Router) { }

  ngOnInit() {
  }
  // OnLiginValidation()
  // {
  //   // alert("Hi This is an Logi Alert");
  //   // console.log(this.Email);
  //   const user = {
  //     Email : this.Email,
  //     Password : this.Password 
  //   }
  // }

  loginUser(e)
  {
    e.preventDefault();
    console.log(e);
    var Email = e.target.elements[0].value;
    var Password = e.target.elements[1].value;
    console.log( Email, Password);
    // return false;

    if(Email == 'radhika@gmail.com' && Password =='123456')
    
        this.router.navigate(['SalesManagerHo']);
    
  }
}
