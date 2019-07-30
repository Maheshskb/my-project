import { Component, OnInit } from '@angular/core';
import { NgForm,} from '@angular/forms';
import { Router } from '@angular/router';

import { PSEApprovalService} from '../../Shared/pse-approval.service';
import { PSEApproval } from '../../Shared/pse-approval.model';
import { from } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-approval-for-pennar-sales-engineer',
  templateUrl: './approval-for-pennar-sales-engineer.component.html',
  styleUrls: ['./approval-for-pennar-sales-engineer.component.css'],
  providers: [PSEApprovalService]
})
export class ApprovalForPennarSalesEngineerComponent implements OnInit {

  constructor( private _PSEApprovalService: PSEApprovalService, private _toastr: ToastrService, private router:Router ) { }

  ngOnInit() {
    this.refreshPEnnarSalesEngneerList();
  }

  refreshPEnnarSalesEngneerList()
  {
    this._PSEApprovalService.getAllPennarSalesEngineer().subscribe((res)=>{
      this._PSEApprovalService.PennarSalesEnggDetails = res as PSEApproval[];
    });
  }

  
  onDelete(_id:string, form:NgForm)
  {
    if(confirm('Are you sure to delete this record ?')==true)
    {
      this._PSEApprovalService.DenyPennarSalesEnggAprroval(_id).subscribe((_res)=>
      {
        
        this.refreshPEnnarSalesEngneerList();
       
      });
    }
  }

  // code to toast notification
  showDeleteToaster(){
    this._toastr.warning("Record is deleted successfully.")
  }

}
