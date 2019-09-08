import { Component, OnInit } from '@angular/core';
import { NgForm,} from '@angular/forms';
import { Router } from '@angular/router';
import { CopperCorrosionProductService } from '../../../../Business Services/copper-corrosion-product.service';
import { CopperCorrosionProduct } from '../../../../../../../Data Access Layer/models/CopperCorrosionProduct.model';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-copper-corrosion-control',
  templateUrl: './copper-corrosion-control.component.html',
  styleUrls: ['./copper-corrosion-control.component.css'],
  providers : [ CopperCorrosionProductService]
})
export class CopperCorrosionControlComponent implements OnInit {

  constructor( private _CopperCorrosionProductService : CopperCorrosionProductService, private _toastr: ToastrService, private router : Router) { }

  ngOnInit() {
    this.resetForm();
    this.refreshProductList();
  }
  resetForm(form?:NgForm)
  {
    if(form)
    form.reset();
    this._CopperCorrosionProductService.selectedCopperCorrosionProduct = {
      _id: " ",
      ProductName:null,
      Dosage:null,
    }
  }

  pageRefresh() {
    location.reload();
 }

  onSubmit(form : NgForm)
  {
    if(form.value._id == " ")
    {
    this._CopperCorrosionProductService.postCopperCorrosionProductDetail(form.value).subscribe((_res)=>
  {
    // this._productDetailsService.productDetails = res as ProductDetails[];
      this.resetForm(form);
      this.showAddToaster();
      this.refreshProductList();
    });
  }
  else{
    this._CopperCorrosionProductService.putCopperCorrosionProducts(form.value).subscribe((_res)=>
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
    this._CopperCorrosionProductService.getAllCopperCorrosionProducts().subscribe((res)=>
    {
      this._CopperCorrosionProductService.copperCorrosionProduct = res as CopperCorrosionProduct[];
    });
  }
  onEdit(products : CopperCorrosionProduct)
  {
    
  this._CopperCorrosionProductService.selectedCopperCorrosionProduct = products;
  }

  onDelete(_id:string, form:NgForm)
  {
    if(confirm('Are you sure to delete this record ?')==true)
    {
      this._CopperCorrosionProductService.deleteCopperCorrosionProduct(_id).subscribe((_res)=>
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
