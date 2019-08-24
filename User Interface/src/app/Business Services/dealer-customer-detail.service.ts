import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment} from '../../environments/environment';
import { DealersCustomerDetail } from '../../../../Data Access Layer/models/DealersCustomerDetail.model';
@Injectable({
  providedIn: 'root'
})
export class DealerCustomerDetailService {
  selectedDealerCustomerDetail: DealersCustomerDetail;
  DealerCustDetails: DealersCustomerDetail[];
  readonly baseURL = 'http://localhost:3000/DealersCustomerDetails';

  constructor(private http:HttpClient) { }
  PostDealersCustomerDetail(dealer_customer_detail:DealersCustomerDetail)
  {
 return this.http.post(this.baseURL, dealer_customer_detail );
  }

  GetAllCustomerListOfDealer()
  {
    return this.http.get(this.baseURL);
  }
}
