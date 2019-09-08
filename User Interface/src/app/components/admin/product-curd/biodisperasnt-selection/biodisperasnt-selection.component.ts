import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { BiodisperantProductService } from '../../../../Business Services/biodisperant-product.service';
// import { ProductDetailsService} from '../../../../Business Services/product-details.service';
import { BiodisperantProduct} from '../../../../../../../Data Access Layer/models/BiodisperantProduct.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-biodisperasnt-selection',
  templateUrl: './biodisperasnt-selection.component.html',
  styleUrls: ['./biodisperasnt-selection.component.css'],
  providers: [BiodisperantProductService]
})
export class BiodisperasntSelectionComponent implements OnInit {

  constructor( private _biodisperantProductService : BiodisperantProductService, private _toastr: ToastrService, private router : Router ) { }

  ngOnInit() {
    this.resetForm();
    this.refreshProductList();
  }
  resetForm(form?:NgForm)
  {
    if(form)
    form.reset();
    this._biodisperantProductService.selectedBiodisperantProduct = {
      _id: " ",
    CreatedDate:null,
    ModifiedDate:null,
    Turbidity:null,
    MaintScore:null,
    Product:" ",
    Dosage:null
    }
  }

  pageRefresh() {
    location.reload();
 }

 OnBiodisperasntselectionSubmit(form : NgForm)
  {
    if(form.value._id == " ")
    {
    this._biodisperantProductService.postBiodisperantProduct(form.value).subscribe((_res)=>
  {
    // this._productDetailsService.productDetails = res as ProductDetails[];
      this.resetForm(form);
      this.showAddToaster();
      this.refreshProductList();
    });
  }
  else{
    this._biodisperantProductService.putBioDesperantProduct(form.value).subscribe((_res)=>
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
    this._biodisperantProductService.getAllBioDesperantProducts().subscribe((res)=>
    {
      this._biodisperantProductService.biodisperantProduct = res as BiodisperantProduct[];
    });
  }
  onEdit(biodisperantProduct : BiodisperantProduct)
  {
    
  this._biodisperantProductService.selectedBiodisperantProduct = biodisperantProduct;
  }

  onDelete(_id:string, form:NgForm)
  {
    if(confirm('Are you sure to delete this record ?')==true)
    {
      this._biodisperantProductService.deleteBioDesperantProduct(_id).subscribe((_res)=>
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
