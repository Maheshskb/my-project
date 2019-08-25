import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment} from '../../environments/environment';
import { ProposalDetails } from '../../../../Data Access Layer/models/ProposalModels/ProposalDetails.model';

@Injectable({
  providedIn: 'root'
})
export class GenerateProposalService {
  selectedProposalDetails: ProposalDetails;
  PD: ProposalDetails[];
  readonly baseURL = 'http://localhost:3000/ProposalDetails';
  constructor(private http:HttpClient) { }

  PostTowerDetail(TSdata : ProposalDetails)
  {
    // return this.http.post(this.baseURL, TSdata);
    return this.http.post(environment.apiBaseUrl+'/ProposalDetails',TSdata);
  }
 PutMakeUpWaterDetail(TSdata : ProposalDetails)
  {
    
    // TSdata.Step="1";
    TSdata.StepNumber="1";
    // return this.http.put(this.baseURL, TSdata);
    return this.http.put(environment.apiBaseUrl+'/ProposalDetails' ,TSdata);
  }

  PutCirculatingWaterDetails(TSdata : ProposalDetails)
  {
    
    // TSdata.Step="1";
    TSdata.StepNumberCirculatingWater = "1";
    // return this.http.put(this.baseURL, TSdata);
    return this.http.put(environment.apiBaseUrl+'/ProposalDetails' ,TSdata);
  }

 
}
