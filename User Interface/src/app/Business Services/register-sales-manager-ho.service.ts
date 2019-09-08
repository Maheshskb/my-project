import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { environment} from '../../environments/environment';
// import { RegisterPennarSalesEnginner } from './register-pennar-sales-enginner.model';
import { SalesManagerHOLogin } from '../../../../Data Access Layer/models/SalesManagerHOLogin.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterSalesManagerHoService {
  selectedSalesManagerHOLogin : SalesManagerHOLogin = {
    _id : '',
     FullName : '',
     Email : '',
     Password : ''
  };  
  constructor( private http : HttpClient ) { }
  PostSalesManagerHO(registerSalesManagerHOLogin:SalesManagerHOLogin)
   {
    return this.http.post(environment.apiBaseUrl+'/RegisterSalesManagerHo',registerSalesManagerHOLogin);
   }

   
}
