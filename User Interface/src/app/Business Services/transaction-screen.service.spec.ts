import { TestBed, inject } from '@angular/core/testing';

import { TransactionScreenService } from './transaction-screen.service';

describe('TransactionScreenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransactionScreenService]
    });
  });

  it('should be created', inject([TransactionScreenService], (service: TransactionScreenService) => {
    expect(service).toBeTruthy();
  }));
});
