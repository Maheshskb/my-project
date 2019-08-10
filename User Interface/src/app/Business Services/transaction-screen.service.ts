import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment} from '../../environments/environment';
import { TransactionScreen } from '../../../../Data Access Layer/models/TransactionScreen.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionScreenService {
  selectedTransactionScreen: TransactionScreen;
  transactionScreen: TransactionScreen[];
  readonly baseURL = 'http://localhost:3000/TransactionDataScreen';
  constructor(private http:HttpClient) { }

  postTowerDetails(TSdata:TransactionScreen)
  {
 return this.http.post(this.baseURL, TSdata );
  }
}
