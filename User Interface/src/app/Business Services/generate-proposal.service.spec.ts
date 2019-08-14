import { TestBed, inject } from '@angular/core/testing';

import { GenerateProposalService } from './generate-proposal.service';

describe('GenerateProposalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenerateProposalService]
    });
  });

  it('should be created', inject([GenerateProposalService], (service: GenerateProposalService) => {
    expect(service).toBeTruthy();
  }));
});
