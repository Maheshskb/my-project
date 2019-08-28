import { Component, OnInit } from '@angular/core';
import { NgForm,} from '@angular/forms';
import { Router } from '@angular/router';
import { ProductDetailsService} from '../../../../Business Services/product-details.service';
// import { ProductDetails } from '../shared/product-details.model';
// import { ProductDetails } from '../../../../../../Data Access Layer/models/ProductDetails.model';
import { ProductDetails } from '../../../../../../../Data Access Layer/models/ProductDetails.model';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-corrosion-and-scale-inhibitor',
  templateUrl: './corrosion-and-scale-inhibitor.component.html',
  styleUrls: ['./corrosion-and-scale-inhibitor.component.css'],
  providers: [ProductDetailsService]
})
export class CorrosionAndScaleInhibitorComponent implements OnInit {

  constructor(private _productDetailsService : ProductDetailsService, private _toastr: ToastrService, private router : Router) { }

  ngOnInit() {
    this.resetForm();
    this.refreshProductList();
  }
  resetForm(form?:NgForm)
  {
    if(form)
    form.reset();
    this._productDetailsService.selectedProductDetails = {
      _id: " ",
      MinTHRange:null,
      MaxTHRange:null,
      MinpHRange:null,
      MaxpHRange:null,
      ProductName:" ",
      Dosage:null
    }
  }

  pageRefresh() {
    location.reload();
 }

  onSubmit(form : NgForm)
  {
    if(form.value._id == " ")
    {
    this._productDetailsService.postProductDetail(form.value).subscribe((_res)=>
  {
    // this._productDetailsService.productDetails = res as ProductDetails[];
      this.resetForm(form);
      this.showAddToaster();
      this.refreshProductList();
    });
  }
  else{
    this._productDetailsService.putProducts(form.value).subscribe((_res)=>
    {
      // this._productDetailsService.productDetails = res as ProductDetails[];
      
      this.ShowEditToaster();
      this.refreshProductList();
      this.resetForm(form);
    });
  }
  }

  refreshProductList()
  {
    this._productDetailsService.getAllProducts().subscribe((res)=>
    {
      this._productDetailsService.productDetails = res as ProductDetails[];
    });
  }
  onEdit(products : ProductDetails)
  {
    
  this._productDetailsService.selectedProductDetails = products;
  }

  onDelete(_id:string, form:NgForm)
  {
    if(confirm('Are you sure to delete this record ?')==true)
    {
      this._productDetailsService.deleteProduct(_id).subscribe((_res)=>
      {
        this.resetForm(form);
        this.showDeleteToaster();
        this.refreshProductList();
      });
    }
  }

   // code to toast notification
   

showAddToaster(){
  this._toastr.success("Record is added successfully!")
}
 ShowEditToaster()
 {
   this._toastr.info("Record is updated Successfully");
 }
 showDeleteToaster(){
  this._toastr.warning("Record is deleted successfully.")
}

}
