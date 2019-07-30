import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { CustomerDetailsService } from '../../shared/customer-details.service'
import { CustomerDetails } from '../../shared/customer-details.model';
import { ToastrService } from 'ngx-toastr';
// declare var $ : any;

@Component({
  selector: 'app-registration-step1',
  templateUrl: './registration-step1.component.html',
  styleUrls: ['./registration-step1.component.css']
})
export class RegistrationStep1Component implements OnInit {
 //declare an array of Towers
 Towers=[1,2,3,4,5,6,7,8,9,10];

  constructor(private _CustomerDetailsService:CustomerDetailsService, private _toastr: ToastrService,
    private router:Router) { }
  @Input() regForm: FormGroup;

  ngOnInit() {
    //  var $;
    // $(document).ready(function (){});
    // $("#btn1").click(function(){
    //  alert("Hii");
    // });

    // $('.slct').change(function () {
    //   var value = $(this).val(); var toAppend = '';
     
    //   });
    this.refreshCustomerDetails();
    this.resetCustomerDetailsForm();
  }

  
step1Submitted() {
    this.regForm.get('CustomerDetails').get('CompanyName').markAsTouched();
    this.regForm.get('CustomerDetails').get('CompanyName').updateValueAndValidity();
    this.regForm.get('CustomerDetails').get('CityName').markAsTouched();
    this.regForm.get('CustomerDetails').get('CityName').updateValueAndValidity();
    this.regForm.get('CustomerDetails').get('Address').markAsTouched();
    this.regForm.get('CustomerDetails').get('Address').updateValueAndValidity();
    this.regForm.get('CustomerDetails').get('Pincode').markAsTouched();
    this.regForm.get('CustomerDetails').get('Pincode').updateValueAndValidity();
    this.regForm.get('CustomerDetails').get('DealerCode').markAsTouched();
    this.regForm.get('CustomerDetails').get('DealerCode').updateValueAndValidity();
    this.regForm.get('CustomerDetails').get('IndusrtyType').markAsTouched();
    this.regForm.get('CustomerDetails').get('IndusrtyType').updateValueAndValidity();
    this.regForm.get('CustomerDetails').get('CustOtherInfo').markAsTouched();
    this.regForm.get('CustomerDetails').get('CustOtherInfo').updateValueAndValidity();
    this.regForm.get('CustomerDetails').get('GSTno').markAsTouched();
    this.regForm.get('CustomerDetails').get('GSTno').updateValueAndValidity();
    this.regForm.get('CustomerDetails').get('ContactPersonName').markAsTouched();
    this.regForm.get('CustomerDetails').get('ContactPersonName').updateValueAndValidity();
    this.regForm.get('CustomerDetails').get('Designation').markAsTouched();
    this.regForm.get('CustomerDetails').get('Designation').updateValueAndValidity();
    this.regForm.get('CustomerDetails').get('FisrtEmail').markAsTouched();
    this.regForm.get('CustomerDetails').get('FisrtEmail').updateValueAndValidity();
    this.regForm.get('CustomerDetails').get('SecondEmail').markAsTouched();
    this.regForm.get('CustomerDetails').get('SecondEmail').updateValueAndValidity();
    this.regForm.get('CustomerDetails').get('OfficeNumber').markAsTouched();
    this.regForm.get('CustomerDetails').get('OfficeNumber').updateValueAndValidity();
    this.regForm.get('CustomerDetails').get('MobileNumber').markAsTouched();
    this.regForm.get('CustomerDetails').get('MobileNumber').updateValueAndValidity();
    this.regForm.get('CustomerDetails').get('MoreContacts').markAsTouched();
    this.regForm.get('CustomerDetails').get('MoreContacts').updateValueAndValidity();
    this.regForm.get('CustomerDetails').get('CustProdctPotential').markAsTouched();
    this.regForm.get('CustomerDetails').get('CustProdctPotential').updateValueAndValidity();
    this.regForm.get('CustomerDetails').get('ChooseProductPraposal').markAsTouched();
    this.regForm.get('CustomerDetails').get('ChooseProductPraposal').updateValueAndValidity();
    this.regForm.get('CustomerDetails').get('EnquireyNature').markAsTouched();
    this.regForm.get('CustomerDetails').get('EnquireyNature').updateValueAndValidity();
    this.regForm.get('CustomerDetails').get('NumOfTower').markAsTouched();
    this.regForm.get('CustomerDetails').get('NumOfTower').updateValueAndValidity();
  
    //  alert( localStorage["XXX"]);
    // console.log(this.regForm.value);
    // alert( localStorage["TWO"]);
  
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
