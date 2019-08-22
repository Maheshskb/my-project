import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm,} from '@angular/forms';
import { CustomerDetailService } from '../../../Business Services/customer-detail.service';
import { ToastrService } from 'ngx-toastr';
import { CustomerDetails } from '../../../../../../Data Access Layer/models/CustomerDetails.model';

@Component({
  selector: 'app-pennar-sales-engg-dashboard',
  templateUrl: './pennar-sales-engg-dashboard.component.html',
  styleUrls: ['./pennar-sales-engg-dashboard.component.css'],
  providers:[CustomerDetailService]
})
export class PennarSalesEnggDashboardComponent implements OnInit {

  constructor(private _CustService:CustomerDetailService,private router:Router,private _toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.RefreshCustomerInfoList();
  }
  Onclick()
  {
    this.router.navigateByUrl('/Customer-Data-Entry-Screen');
    return true;
  }
  resetForm(form?:NgForm)
  {
    if(form)
    form.reset();
    this._CustService.selectedCustomerDetails = {
      // _id :"",
      CompanyName: "",
      CityName : "",
      Address: "",
      Pincode: "",
      DealerCode: "",
      IndusrtyType: "",
      CustOtherInfo:"", 
      GSTno:"", 
      ContactPersonName: "", 
      Designation: "",
      FisrtEmail: "", 
      SecondEmail: "",
      OfficeNumber: "",
      MobileNumber: "",
      MoreContacts: "", 
      CustProdctPotential: "", 
      ChooseProductPraposal: "",
      EnquireyNature:""
    }
  }

  onCustomerInfoSubmit(form : NgForm)
  {
    
    this._CustService.postCustomerDetail(form.value).subscribe((_res)=>
  {
      this.resetForm(form); 
      this.RefreshCustomerInfoList()
      this.showAddToaster();  
    }); 
  }

  //Refresh All Customer Details Info
  RefreshCustomerInfoList()
  {
    this._CustService.GetAllCustomerList().subscribe((res)=>{
      this._CustService.custDetails = res as CustomerDetails[];
    });
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
  

