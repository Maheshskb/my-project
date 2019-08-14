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
  constructor() { }
}
