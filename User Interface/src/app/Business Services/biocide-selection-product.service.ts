import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable} from 'rxjs';

// import { ProductDetails } from './product-details.model';
import { BiocideProduct } from '../../../../Data Access Layer/models/BiocideProduct.model';
@Injectable({
  providedIn: 'root'
})
export class BiocideSelectionProductService {
  selectedBiocideProduct: BiocideProduct;
  biocideProduct: BiocideProduct[];

  readonly baseURL = "http://localhost:3000/BiocideProduct/";

  constructor( private http:HttpClient ) { }

   //Corrision Scale Inhibitor
   postBiocideProductDetail(products:BiocideProduct)
   {
  return this.http.post(this.baseURL, products );
   }
   getAllBiocideProducts()
   {
     return this.http.get(this.baseURL);
   }
   putBiocideProducts(products: BiocideProduct)
   {
     return this.http.put(this.baseURL + `/${products._id}`,products);
   }
   deleteBiocideProduct(_id:string)
   {
      return this.http.delete(this.baseURL + `/${_id}`);
   }
}
