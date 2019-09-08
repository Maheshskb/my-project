import { TestBed, inject } from '@angular/core/testing';

import { CopperCorrosionProductService } from './copper-corrosion-product.service';

describe('CopperCorrosionProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CopperCorrosionProductService]
    });
  });

  it('should be created', inject([CopperCorrosionProductService], (service: CopperCorrosionProductService) => {
    expect(service).toBeTruthy();
  }));
});
