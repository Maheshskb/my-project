import { Component, OnInit } from '@angular/core';
import { NgForm,} from '@angular/forms';
import { Router } from '@angular/router';

import { PriceDetailsService} from '../shared/price-details.service';
import { PriceDetails } from '../shared/price-details.model';
import { from } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

declare var M:any;
declare var $;


@Component({
  selector: 'app-price-details',
  templateUrl: './price-details.component.html',
  styleUrls: ['./price-details.component.css'],
  viewProviders : [PriceDetailsService]
})
export class PriceDetailsComponent implements OnInit {


  // private loadComponent = false;
  //   loadMyChildComponent(){
  //      this.loadComponent = true;
  //   }

   
  constructor( private _priceDetailsService : PriceDetailsService, 
    private _toastr: ToastrService, private router:Router ) { }
    
    // reloadPage() {
    //   // Solution 1:   
    //    this.router.navigate(['localhost:4200/priceDetails']);
    // }
   
     ngOnInit() {
    
    this.refreshProductPriceList();
    this.resetForm();
    // this.refreshProductPriceList();

  //   $(document).ready(function() {
  //     $('#dataTable').DataTable({
  //       "paging": true,
  //       "lengthChange": true,
  //       "searching": false,
  //       "ordering": false,
  //       "info": true,
  //       "autoWidth": true,
  //       "pageLength":5,
  //       "lengthMenu": [ 5,10,15,25,30,35,40,45,50,55,60,65,70,75, 100 ]
  //       });
  // });
    
  }

  resetForm(form?:NgForm)
  {
    if(form)
    form.reset();
    this._priceDetailsService.selectedProductPrice = {
      _id: " ",
      ProductName:null,
      THMinPrice:null,
      THMaxPrice:null,
      phMinPrice:null,
      PhMaxPrice:null,
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
    this._priceDetailsService.postProductPriceDetail(form.value).subscribe((_res)=>
  {
    // this._productDetailsService.productDetails = res as ProductDetails[];
      this.resetForm(form);  
      this.showAddToaster(); 
      this.refreshProductPriceList(); 
    });
  }
  else{
    this._priceDetailsService.putProductsPrice(form.value).subscribe((_res)=>
    { 
        this.ShowEditToaster();
        this.refreshProductPriceList(); 
        this.resetForm(form);
        this.pageRefresh();
    });
  }
  }

  

  refreshProductPriceList()
  {
    this._priceDetailsService.getProductsPriseList().subscribe((res)=>{
      this._priceDetailsService.priceDetails = res as PriceDetails[];
    });
  }

 
  onEdit(proPrice : PriceDetails)
  {
    
  this._priceDetailsService.selectedProductPrice = proPrice;
  }

    onDelete(_id:string, form:NgForm)
  {
    if(confirm('Are you sure to delete this record ?')==true)
    {
      this._priceDetailsService.deleteProductPrice(_id).subscribe((_res)=>
      {
        this.resetForm(form);
        this.showDeleteToaster();
        this.refreshProductPriceList();
       
      });
    }
  }

   // code to toast notification
   showDeleteToaster(){
    this._toastr.warning("Record is deleted successfully.")
  }

showAddToaster(){
  this._toastr.success("Record is added successfully!")
}
 ShowEditToaster()
 {
   this._toastr.info("Record Updated Successfully");
 }
}
