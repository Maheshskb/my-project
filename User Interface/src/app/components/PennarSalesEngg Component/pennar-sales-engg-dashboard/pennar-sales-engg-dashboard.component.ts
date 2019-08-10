import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm,} from '@angular/forms';
import { CustomerDetailService } from '../../../Business Services/customer-detail.service';
// import { CustomerDetails } from '../../../../../../Data Access Layer/models/CustomerDetails.model';

@Component({
  selector: 'app-pennar-sales-engg-dashboard',
  templateUrl: './pennar-sales-engg-dashboard.component.html',
  styleUrls: ['./pennar-sales-engg-dashboard.component.css'],
  providers:[CustomerDetailService]
})
export class PennarSalesEnggDashboardComponent implements OnInit {

  constructor(private _CustService:CustomerDetailService,private router:Router) { }

  ngOnInit() {
    this.resetForm();
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
      Pincode: null,
      DealerCode: null,
      IndusrtyType: "",
      CustOtherInfo:"", 
      GSTno:"", 
      ContactPersonName: "", 
      Designation: "",
      FisrtEmail: "", 
      SecondEmail: "",
       OfficeNumber: null,
        MobileNumber: null,
      MoreContacts: null, 
      CustProdctPotential: "", 
      ChooseProductPraposal: "",
      EnquireyNature:""
    }
  }

 onSubmit(form : NgForm)
  {
    
    this._CustService.postCustomerDetail(form.value).subscribe((_res)=>
  {
      this.resetForm(form);  
    }); 
  }
  
}
