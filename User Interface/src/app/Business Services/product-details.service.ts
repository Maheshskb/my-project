import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable} from 'rxjs';

// import { ProductDetails } from './product-details.model';
import { ProductDetails } from '../../../../Data Access Layer/models/ProductDetails.model';
import { BiodisperantProduct } from '../../../../Data Access Layer/models/BiodisperantProduct.model';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  selectedProductDetails: ProductDetails;
  productDetails: ProductDetails[];


  readonly baseURL = 'http://localhost:3000/productDetails';
  readonly BioDisperantBaseURL = "http://localhost:3000/BiodisperantProduct";
  readonly CopperCorrosionBaseURL = "http://localhost:3000/CopperCorrosionProduct";
  readonly BiocideSelectionBaseURL = "http://localhost:3000/BiocideProduct/";

  constructor(private http:HttpClient) { }
  //Corrision Scale Inhibitor
  postProductDetail(products:ProductDetails)
  {
 return this.http.post(this.baseURL, products );
  }
  getAllProducts()
  {
    return this.http.get(this.baseURL);
  }
  putProducts(products: ProductDetails)
  {
    return this.http.put(this.baseURL + `/${products._id}`,products);
  }
  deleteProduct(_id:string)
  {
     return this.http.delete(this.baseURL + `/${_id}`);
  }


//   //Biodisperant Product
//   postBiodisperantProduct(biodisperantProduct:BiodisperantProduct)
//   {
//  return this.http.post(this.BioDisperantBaseURL, biodisperantProduct );
//   }
  getAllBioDesperantProducts()
  {
    return this.http.get(this.BioDisperantBaseURL);
  }
//   putBioDesperantProduct(biodisperantProduct:BiodisperantProduct)
//   {
//     return this.http.put(this.BioDisperantBaseURL + `/${biodisperantProduct._id}`,biodisperantProduct);
//   }
//   deleteBioDesperantProduct(_id:string)
//   {
//      return this.http.delete(this.BioDisperantBaseURL + `/${_id}`);
//   }


  //Need to Look at logic
  getAllCopperCorrosionProducts()
  {
    return this.http.get(this.CopperCorrosionBaseURL);
  }
  //Need to Implement
 

  // getAllBiocideProducts()
  // {
  //   return this.http.get(this.BiocideSelectionBaseURL);
  // }
  //Function for Fetch all products from mongodb
  
}
