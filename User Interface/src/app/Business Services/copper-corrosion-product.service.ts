import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CopperCorrosionProduct } from '../../../../Data Access Layer/models/CopperCorrosionProduct.model';

@Injectable({
  providedIn: 'root'
})
export class CopperCorrosionProductService {
  selectedCopperCorrosionProduct: CopperCorrosionProduct;
  copperCorrosionProduct: CopperCorrosionProduct[];

  readonly baseURL = "http://localhost:3000/CopperCorrosionProduct";
  constructor( private http:HttpClient ) { }
   //Corrision Scale Inhibitor
   postCopperCorrosionProductDetail(products:CopperCorrosionProduct)
   {
  return this.http.post(this.baseURL, products );
   }
   getAllCopperCorrosionProducts()
   {
     return this.http.get(this.baseURL);
   }
   putCopperCorrosionProducts(products: CopperCorrosionProduct)
   {
     return this.http.put(this.baseURL + `/${products._id}`,products);
   }
   deleteCopperCorrosionProduct(_id:string)
   {
      return this.http.delete(this.baseURL + `/${_id}`);
   }
}
