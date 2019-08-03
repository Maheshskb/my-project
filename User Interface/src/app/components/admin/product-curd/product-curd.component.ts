import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm,} from '@angular/forms';
import { Router } from '@angular/router';
import { ProductDetailsService} from '../shared/product-details.service';
import { ProductDetails } from '../shared/product-details.model';

import { ToastrService } from 'ngx-toastr';

declare var M:any;
declare var $:any;
@Component({
  selector: 'app-product-curd',
  templateUrl: './product-curd.component.html',
  styleUrls: ['./product-curd.component.css'],
  providers: [ProductDetailsService]
})
export class ProductCURDComponent implements OnInit {
 
  constructor(private _productDetailsService : ProductDetailsService, private _toastr: ToastrService, private router : Router) { }

   onRefresh()
   {
    
   }
  ngOnInit() {
    
    
    this.resetForm();
    this.refreshProductList();

  //   $(document).ready(function() {
  //     $('#example').DataTable();
  // } );

  $(document).ready(function() {
    $('#dataTable').DataTable({
      "paging": true,
      "lengthChange": true,
      "searching": false,
      "ordering": false,
      "info": true,
      "autoWidth": true,
      "pageLength":5,
      "lengthMenu": [ 5,10,15,25,30,35,40,45,50,55,60,65,70,75, 100 ]
      });
});

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
