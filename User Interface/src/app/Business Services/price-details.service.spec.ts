import { TestBed, inject } from '@angular/core/testing';

import { PriceDetailsService } from './price-details.service';

describe('PriceDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PriceDetailsService]
    });
  });

  it('should be created', inject([PriceDetailsService], (service: PriceDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
