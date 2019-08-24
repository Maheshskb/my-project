import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm,} from '@angular/forms';
import { DealerCustomerDetailService } from '../../../Business Services/dealer-customer-detail.service';
import { ToastrService } from 'ngx-toastr';
import { DealersCustomerDetail } from '../../../../../../Data Access Layer/models/DealersCustomerDetail.model';

@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.css'],
  providers:[DealerCustomerDetailService]
})
export class DealerComponent implements OnInit {

  constructor(private _DealerCustomerDetailService : DealerCustomerDetailService, private router:Router, private _toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.RefreshCustomerInfoList();
  }
  resetForm(form?:NgForm)
  {
    if(form)
    form.reset();
    this._DealerCustomerDetailService.selectedDealerCustomerDetail = {
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
    
    this._DealerCustomerDetailService.PostDealersCustomerDetail(form.value).subscribe((_res)=>
  {
      this.resetForm(form); 
      this.RefreshCustomerInfoList()
      this.showAddToaster();  
    }); 
  }

  //Refresh All Customer Details Info
  RefreshCustomerInfoList()
  {
    this._DealerCustomerDetailService.GetAllCustomerListOfDealer().subscribe((res)=>{
    this._DealerCustomerDetailService.DealerCustDetails = res as DealersCustomerDetail[];
    });
  }
  
 //Add New Sales Engg Methods

  // code to toast notification
  showDeleteToaster(){
    this._toastr.warning("Record deleted successfully.")
  }

showAddToaster(){
  this._toastr.success("Record added successfully!")
}
 ShowEditToaster()
 {
   this._toastr.info("Record Updated Successfully");
 }


}
