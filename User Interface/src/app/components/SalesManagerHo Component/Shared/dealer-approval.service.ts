import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable} from 'rxjs';
import { environment} from '../../../../environments/environment';


import { RegisterDealer } from '../../../../../../Data Access Layer/models/DealerRegister.model';
@Injectable({
  providedIn: 'root'
})
export class DealerApprovalService {
  selectedDealerApproval: RegisterDealer;
  DealerDetails: RegisterDealer[];
  readonly baseURL = 'http://localhost:3000/RegisterDealer';

  constructor(private http:HttpClient) { }
  //Dealer operations
  getAllDealers()
  {
    return this.http.get(this.baseURL);
  }
  DenyDealerAprroval(_id:string)
  {
     return this.http.delete(this.baseURL + `/${_id}`);
  }
}
