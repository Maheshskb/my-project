import { Component, OnInit } from '@angular/core';
import { NgForm,} from '@angular/forms';
import { Router } from '@angular/router';

import { DealerApprovalService } from '../../Shared/dealer-approval.service';
import { RegisterDealer } from '../../../../../../../Data Access Layer/models/DealerRegister.model';;
import { from } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
// import {ApprovalForNewDealerComponent} from '/../'
@Component({
  selector: 'app-approval-for-new-dealer',
  templateUrl: './approval-for-new-dealer.component.html',
  styleUrls: ['./approval-for-new-dealer.component.css'],
  providers:[DealerApprovalService]
})
export class ApprovalForNewDealerComponent implements OnInit {

  constructor( private _DealerApprovalService:DealerApprovalService, private _toastr: ToastrService, private router:Router ) { }

  ngOnInit() {
    this.refreshDealerList();
  }
  refreshDealerList()
  {
    this._DealerApprovalService.getAllDealers().subscribe((res)=>{
      this._DealerApprovalService.DealerDetails = res as RegisterDealer[];
    });
  }

  onDelete(_id:string, form:NgForm)
  {
    if(confirm('Are you sure to delete this record ?')==true)
    {
      this._DealerApprovalService.DenyDealerAprroval(_id).subscribe((_res)=>
      {
        this.refreshDealerList(); 
      });
    }
  }
}
