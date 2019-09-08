import { Component, OnInit } from '@angular/core';
import { NgForm,} from '@angular/forms';
import { Router } from '@angular/router';
import { BiocideSelectionProductService} from '../../../../Business Services/biocide-selection-product.service';
import { BiocideProduct } from '../../../../../../../Data Access Layer/models/BiocideProduct.model';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-biocide-selection',
  templateUrl: './biocide-selection.component.html',
  styleUrls: ['./biocide-selection.component.css'],
  providers: [BiocideSelectionProductService]
})
export class BiocideSelectionComponent implements OnInit {

  constructor( private _biocideSelectionProductService : BiocideSelectionProductService, private _toastr: ToastrService, private router : Router) { }

  ngOnInit() {
    this.resetForm();
    this.refreshProductList();
  }
  resetForm(form?:NgForm)
  {
    if(form)
    form.reset();
    this._biocideSelectionProductService.selectedBiocideProduct = {
      _id: " ",
      HalfLife: " ",
      SourceOfWater:" ",
      ProductName:" ",
      Dosage:null,
      Frequency:" ",
    
    }
  }

  pageRefresh() {
    location.reload();
 }

  onSubmit(form : NgForm)
  {
    if(form.value._id == " ")
    {
    this._biocideSelectionProductService.postBiocideProductDetail(form.value).subscribe((_res)=>
  {
    // this._productDetailsService.productDetails = res as ProductDetails[];
      this.resetForm(form);
      this.showAddToaster();
      this.refreshProductList();
    });
  }
  else{
    this._biocideSelectionProductService.putBiocideProducts(form.value).subscribe((_res)=>
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
    this._biocideSelectionProductService.getAllBiocideProducts().subscribe((res)=>
    {
      this._biocideSelectionProductService.biocideProduct = res as BiocideProduct[];
    });
  }
  onEdit(products : BiocideProduct)
  {
    
  this._biocideSelectionProductService.selectedBiocideProduct = products;
  }

  onDelete(_id:string, form:NgForm)
  {
    if(confirm('Are you sure to delete this record ?')==true)
    {
      this._biocideSelectionProductService.deleteBiocideProduct(_id).subscribe((_res)=>
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
