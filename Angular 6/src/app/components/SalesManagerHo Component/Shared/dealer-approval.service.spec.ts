import { TestBed, inject } from '@angular/core/testing';

import { DealerApprovalService } from './dealer-approval.service';

describe('DealerApprovalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DealerApprovalService]
    });
  });

  it('should be created', inject([DealerApprovalService], (service: DealerApprovalService) => {
    expect(service).toBeTruthy();
  }));
});
