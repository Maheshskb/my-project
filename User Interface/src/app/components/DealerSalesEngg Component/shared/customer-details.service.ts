import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CustomerDetails } from './customer-details.model';
@Injectable({
  providedIn: 'root'
})
export class CustomerDetailsService {

  selectedCustomerDetail: CustomerDetails;
  customerDetails: CustomerDetails[];
  readonly baseURL = 'http://localhost:3000/customerDetails';
  constructor(private http : HttpClient) { }

  postCustomerDetails(custDetails : CustomerDetails)
  {
    return this.http.post(this.baseURL, custDetails);
  }
  getAllCustomerDetails()
  {
    return this.http.get(this.baseURL);
  }
  putCustomerDetails(custDetails : CustomerDetails)
  {
    return this.http.put(this.baseURL + `/${custDetails._id}`,custDetails)
  }
  deleteCustomerDetail(_id:string)
  {
     return this.http.delete(this.baseURL + `/${_id}`);
  }
  
}
