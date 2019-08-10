import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm,} from '@angular/forms';
import { TransactionScreenService } from '../../../../Business Services/transaction-screen.service';
// import { TransactionScreen } from '../../../../../../../Data Access Layer/models/TransactionScreen.model';

@Component({
  selector: 'app-customer-data-entry-screen',
  templateUrl: './customer-data-entry-screen.component.html',
  styleUrls: ['./customer-data-entry-screen.component.css'],
  providers: [TransactionScreenService]
})
export class CustomerDataEntryScreenComponent implements OnInit {

  constructor( private _TransactionScreen:TransactionScreenService, private router:Router) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?:NgForm)
  {
    if(form)
    form.reset();
    this._TransactionScreen.selectedTransactionScreen = {
      TowerNumbers: "",
      TowerName: ""
    }
  }

  onSubmit(form : NgForm)
  {
    
    this._TransactionScreen.postTowerDetails(form.value).subscribe((_res)=>
  {
      this.resetForm(form);  
    }); 
  }
}
