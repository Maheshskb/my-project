import { TestBed, inject } from '@angular/core/testing';

import { DealerCustomerDetailService } from './dealer-customer-detail.service';

describe('DealerCustomerDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DealerCustomerDetailService]
    });
  });

  it('should be created', inject([DealerCustomerDetailService], (service: DealerCustomerDetailService) => {
    expect(service).toBeTruthy();
  }));
});
