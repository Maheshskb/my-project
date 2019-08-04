import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable} from 'rxjs';

// import { PriceDetails } from './price-details.model';
import { PriceDetails } from '../../../../Data Access Layer/models/PriceDetails.model';


@Injectable({
  providedIn: 'root'
})
export class PriceDetailsService {
  selectedProductPrice: PriceDetails;
  priceDetails: PriceDetails[];
  readonly baseURL = 'http://localhost:3000/priceDetails';

  constructor( private http:HttpClient ) { }

  postProductPriceDetail(productsPrice:PriceDetails)
  {
 return this.http.post(this.baseURL, productsPrice );
  }

  //Function for Fetch all products from mongodb
  getProductsPriseList()
  {
    return this.http.get(this.baseURL);
  }
  putProductsPrice(productsPrice:PriceDetails)
  {
    return this.http.put(this.baseURL + `/${productsPrice._id}`,productsPrice);
  }
  deleteProductPrice(_id:string)
  {
     return this.http.delete(this.baseURL + `/${_id}`);
  }
  
}
