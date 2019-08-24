import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment} from '../../environments/environment';
import { DealerSalesEngg } from '../../../../Data Access Layer/models/DealerSalesEngg.model';
@Injectable({
  providedIn: 'root'
})
export class DealerSalesEnggService {
  selectedDealerSalesEngg: DealerSalesEngg;
  dealerSalesEngg: DealerSalesEngg[];
  readonly baseURL = 'http://localhost:3000/AddDealersSalesEngg';

  constructor(private http:HttpClient) { }

  PostNewSalesEngg(dealer_sales_engg:DealerSalesEngg)
  {
 return this.http.post(this.baseURL, dealer_sales_engg );
  }

  GetAllSalesEnggRequest()
  {
    return this.http.get(this.baseURL);
  }
}
