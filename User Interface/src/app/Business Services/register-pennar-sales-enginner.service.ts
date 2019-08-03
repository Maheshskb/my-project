import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { environment} from '../../environments/environment';
// import { RegisterPennarSalesEnginner } from './register-pennar-sales-enginner.model';
import { PSEregister } from '../../../../Data Access Layer/models/PSEregister.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterPennarSalesEnginnerService {
//  selectedRegisterPennarSalesEnginner : RegisterPennarSalesEnginner = {
  selectedRegisterPennarSalesEnginner : PSEregister = {
   _id : '',
    FirstName : '',
    LastName : '',
    Address : '',
    Email : '',
    MobileNumber : '',
    PANNumber : '',
    AdharNumber : '',
    Password : ''
 };  

 noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http : HttpClient ) { }
   //Http methods
  //  PostPennarSalesEngg(registerPennarSalesEnginner:RegisterPennarSalesEnginner)
  PostPennarSalesEngg(registerPennarSalesEnginner:PSEregister)
   {
    return this.http.post(environment.apiBaseUrl+'/RegisterPennarSalesEngineer',registerPennarSalesEnginner);
    //return this.http.post(environment.apiBaseUrl+'/RegisterPennarSalesEngineer', registerPennarSalesEnginner)
   }

   DenyPennarSalesEnggAprroval(_id:string)
  {
     return this.http.delete(environment.apiBaseUrl + `/${_id}`);
  }

   PennarSalesEnggLogin(authCredentials) {
    return this.http.post(environment.apiBaseUrl + '/authenticatePennarSalesEngg', authCredentials);
  }

  getPennarSalesEnggDashboard()
  {
    return this.http.get(environment.apiBaseUrl + '/PennarSalesEnggDashboard')
  }
  
  //Helper Methods

  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  
  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }

}
