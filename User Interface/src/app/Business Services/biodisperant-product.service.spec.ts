import { TestBed, inject } from '@angular/core/testing';

import { BiodisperantProductService } from './biodisperant-product.service';

describe('BiodisperantProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BiodisperantProductService]
    });
  });

  it('should be created', inject([BiodisperantProductService], (service: BiodisperantProductService) => {
    expect(service).toBeTruthy();
  }));
});
