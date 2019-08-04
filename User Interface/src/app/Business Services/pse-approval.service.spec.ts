import { TestBed, inject } from '@angular/core/testing';

import { PSEApprovalService } from './pse-approval.service';

describe('PSEApprovalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PSEApprovalService]
    });
  });

  it('should be created', inject([PSEApprovalService], (service: PSEApprovalService) => {
    expect(service).toBeTruthy();
  }));
});
