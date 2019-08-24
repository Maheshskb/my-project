import { TestBed, inject } from '@angular/core/testing';

import { DealerSalesEnggService } from './dealer-sales-engg.service';

describe('DealerSalesEnggService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DealerSalesEnggService]
    });
  });

  it('should be created', inject([DealerSalesEnggService], (service: DealerSalesEnggService) => {
    expect(service).toBeTruthy();
  }));
});
