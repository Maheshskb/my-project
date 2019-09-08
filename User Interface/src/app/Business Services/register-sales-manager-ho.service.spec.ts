import { TestBed, inject } from '@angular/core/testing';

import { RegisterSalesManagerHoService } from './register-sales-manager-ho.service';

describe('RegisterSalesManagerHoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterSalesManagerHoService]
    });
  });

  it('should be created', inject([RegisterSalesManagerHoService], (service: RegisterSalesManagerHoService) => {
    expect(service).toBeTruthy();
  }));
});
