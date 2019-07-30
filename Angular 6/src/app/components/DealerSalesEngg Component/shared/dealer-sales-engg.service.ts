import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { DealerSalesEngg } from './dealer-sales-engg.model';

@Injectable({
  providedIn: 'root'
})
export class DealerSalesEnggService {

  SelectedDealerSalesEngg : DealerSalesEngg = {
    DSEname : '',
    DSEemail : '',
    DSEpassword : '',
    FirstName : '',
    LastName :'',
    Address : '',
    Email : '',
    MobileNumber : '',
    PANNumber : '',
    AdharNumber : '',
    DealerCode : '',
    Password : ''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor( private http : HttpClient) { }

 //Http methods
  PostDealerSalesEngg(dealerSalesEngg:DealerSalesEngg)
  {
   return this.http.post(environment.apiBaseUrl+'/RegisterDealerSalesEngg', dealerSalesEngg)
  }

  
   DealerSalesEnggLogin(authCredentials) {
    return this.http.post(environment.apiBaseUrl + '/authenticateDealerSalesEngg', authCredentials);
  }

  getDealerSalesEnggDashboard()
  {
    return this.http.get(environment.apiBaseUrl + '/DealerSalesEnggDashboard')
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
