import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable} from 'rxjs';
import { environment} from '../../environments/environment';

// import { PSEApproval } from './pse-approval.model';
import { PSEregister } from '../../../../Data Access Layer/models/PSEregister.model';
// import { RegisterPennarSalesEnginner } from '../../PennarSalesEngg Component/Shared/register-pennar-sales-enginner.model';
@Injectable({
  providedIn: 'root'
})
export class PSEApprovalService {

  // selectedPSEApproval: PSEApproval;
  // PennarSalesEnggDetails: PSEApproval[];0
  selectedPSEApproval: PSEregister;
  PennarSalesEnggDetails: PSEregister[];
  readonly baseURL = 'http://localhost:3000/RegisterPennarSalesEngineer';
  // readonly dealerBaseURL = 'http://localhost:3000/RegisterDealer';

  constructor(private http:HttpClient) { }
 
  getAllPennarSalesEngineer()
  {
    return this.http.get(this.baseURL);
  }
  DenyPennarSalesEnggAprroval(_id:string)
  {
     return this.http.delete(this.baseURL + `/${_id}`);
  }

  // //Dealer operations
  // getAllDealers()
  // {
  //   return this.http.get(this.dealerBaseURL);
  // }
}
