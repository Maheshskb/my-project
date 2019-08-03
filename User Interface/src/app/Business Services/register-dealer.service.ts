import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { environment} from '../../environments/environment';
// import { RegisterDealer } from './register-dealer.model';
import { DealerRegister} from '../../../../Data Access Layer/models/DealerRegister.model'

@Injectable({
  providedIn: 'root'
})
export class RegisterDealerService {
  // selectedRegisterDealer : RegisterDealer = {
    selectedRegisterDealer : DealerRegister = {
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

  // PostDealers(registerDealer:RegisterDealer)
  PostDealers(registerDealer:DealerRegister)
   {
    return this.http.post(environment.apiBaseUrl+'/RegisterDealer',registerDealer);
   }
 
}
