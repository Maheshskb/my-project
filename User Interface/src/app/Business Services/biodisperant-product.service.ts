import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BiodisperantProduct } from '../../../../Data Access Layer/models/BiodisperantProduct.model';

@Injectable({
  providedIn: 'root'
})
export class BiodisperantProductService {
  selectedBiodisperantProduct: BiodisperantProduct;
  biodisperantProduct: BiodisperantProduct[];

  readonly baseURL = "http://localhost:3000/BiodisperantProduct";
  constructor(private http:HttpClient) { }
  
  //Biodisperant Product
  postBiodisperantProduct(biodisperantProduct:BiodisperantProduct)
  {
 return this.http.post(this.baseURL, biodisperantProduct );
 
  }
  getAllBioDesperantProducts()
  {
    return this.http.get(this.baseURL);
  }
  putBioDesperantProduct(biodisperantProduct:BiodisperantProduct)
  {
    return this.http.put(this.baseURL + `/${biodisperantProduct._id}`,biodisperantProduct);
  }
  deleteBioDesperantProduct(_id:string)
  {
     return this.http.delete(this.baseURL + `/${_id}`);
  }
}
