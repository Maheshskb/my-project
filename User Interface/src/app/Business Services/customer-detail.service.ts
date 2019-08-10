import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment} from '../../environments/environment';
import { CustomerDetails } from '../../../../Data Access Layer/models/CustomerDetails.model';
@Injectable({
  providedIn: 'root'
})
export class CustomerDetailService {
  selectedCustomerDetails: CustomerDetails;
  custDetails: CustomerDetails[];
  readonly baseURL = 'http://localhost:3000/CustomerDetails';
  constructor( private http:HttpClient) { }

  postCustomerDetail(customer_detail:CustomerDetails)
  {
 return this.http.post(this.baseURL, customer_detail );
  }
}
