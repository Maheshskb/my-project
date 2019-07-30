import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { CustomerDetailsService } from '../../shared/customer-details.service'
import { CustomerDetails } from '../../shared/customer-details.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
  providers: [CustomerDetailsService]
})
export class CustomerDetailsComponent implements OnInit {

  constructor( private _CustomerDetailsService:CustomerDetailsService, private _toastr: ToastrService,
    private router:Router) { }

  ngOnInit() {
    this.refreshCustomerDetails();
    this.resetCustomerDetailsForm();
   }

  resetCustomerDetailsForm(form?: NgForm)
  {
    if(form)
    form.reset();
    this._CustomerDetailsService.selectedCustomerDetail = {
      _id: " ",
      CompanyName:" ",
      CityName:" ",
      Address:" ",
      Pincode:null,
      DealerCode:null,
      IndusrtyType:" ",
      CustOtherInfo:" ",
      GSTno:" ",
      ContactPersonName:" ",
      Designation:" ",
      FisrtEmail:" ",
      SecondEmail:" ",
      OfficeNumber:null,
      MobileNumber:null,
      MoreContacts:null,
      CustProdctPotential:" ",
      ChooseProductPraposal:" ",
      EnquireyNature:" "
    }
  }

  pageRefresh() {
    location.reload();
 }

  onSubmit(form : NgForm)
  {
    if(form.value._id == " ")
    {
     this._CustomerDetailsService.postCustomerDetails(form.value).subscribe((_res)=>{
     this.resetCustomerDetailsForm(form);
     this.showAddToaster(); 
     this.refreshCustomerDetails();
   });
  }
   else{
    this._CustomerDetailsService.putCustomerDetails(form.value).subscribe((_res)=>
    { 
        this.ShowEditToaster();
        this.refreshCustomerDetails(); 
         this.resetCustomerDetailsForm(form);
         this.pageRefresh();
    });
  }
  }

  refreshCustomerDetails()
  {
    this._CustomerDetailsService.getAllCustomerDetails().subscribe((res)=>{
      this._CustomerDetailsService.customerDetails = res as CustomerDetails[];
    });
  }

  onEdit(cust_details : CustomerDetails)
  {
    this._CustomerDetailsService.selectedCustomerDetail = cust_details;
  }

  onDelete(_id:string, form:NgForm)
  {
    if(confirm('Are you sure to delete this record ?')==true)
    {
      this._CustomerDetailsService.deleteCustomerDetail(_id).subscribe((_res)=>
      {
        this.resetCustomerDetailsForm(form);
        this.showDeleteToaster();
        this.refreshCustomerDetails();
       
      });
    }
  }


  //toaster notification
  showAddToaster(){
    this._toastr.success("Record is added successfully!")
  }
  ShowEditToaster()
 {
   this._toastr.info("Record Updated Successfully");
 }
 showDeleteToaster(){
  this._toastr.warning("Record is deleted successfully.")
}
}
