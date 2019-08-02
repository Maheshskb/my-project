import { TestBed, inject } from '@angular/core/testing';

import { RegisterDealerService } from './register-dealer.service';

describe('RegisterDealerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterDealerService]
    });
  });

  it('should be created', inject([RegisterDealerService], (service: RegisterDealerService) => {
    expect(service).toBeTruthy();
  }));
});
