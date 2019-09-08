import { TestBed, inject } from '@angular/core/testing';

import { BiocideSelectionProductService } from './biocide-selection-product.service';

describe('BiocideSelectionProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BiocideSelectionProductService]
    });
  });

  it('should be created', inject([BiocideSelectionProductService], (service: BiocideSelectionProductService) => {
    expect(service).toBeTruthy();
  }));
});
