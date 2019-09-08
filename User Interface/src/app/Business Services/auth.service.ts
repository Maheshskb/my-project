import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
authToken : any;
user : any;
  constructor( private http:Http) { }
  registerUser( user)
  {
    let headers = new Headers();
  }
}
