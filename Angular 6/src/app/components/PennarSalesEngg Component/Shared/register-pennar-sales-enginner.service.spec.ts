import { TestBed, inject } from '@angular/core/testing';

import { RegisterPennarSalesEnginnerService } from './register-pennar-sales-enginner.service';

describe('RegisterPennarSalesEnginnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterPennarSalesEnginnerService]
    });
  });

  it('should be created', inject([RegisterPennarSalesEnginnerService], (service: RegisterPennarSalesEnginnerService) => {
    expect(service).toBeTruthy();
  }));
});
