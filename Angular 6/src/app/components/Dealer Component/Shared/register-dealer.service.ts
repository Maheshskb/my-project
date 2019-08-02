import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { environment} from '../../../../environments/environment';
import { RegisterDealer } from './register-dealer.model';
@Injectable({
  providedIn: 'root'
})
export class RegisterDealerService {
  selectedRegisterDealer : RegisterDealer = {
    _id : '',
    DealerName : '',
    Address : '',
    Email : '',
    ContactNumber : '',
    City : '',
    State : '',
    ContactKeyPerson : '',
    ContactKeyPersonName : '',
    ContactKeyPersonMobileNumber : '',
    GSTnumber : '',
    PANnumber : '',
    OtherDetails : '',
    AreaOfOperation : '',
    EmployeeStrength : '',
    AnyOtherInfo1 : '',
    AnyOtherInfo2 : ''
  };

  constructor( private http : HttpClient ) { }

  PostDealers(registerDealer:RegisterDealer)
   {
    return this.http.post(environment.apiBaseUrl+'/RegisterDealer',registerDealer);
   }
}
