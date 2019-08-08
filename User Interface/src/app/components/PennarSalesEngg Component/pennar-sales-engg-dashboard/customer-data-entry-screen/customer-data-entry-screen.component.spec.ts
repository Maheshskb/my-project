import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDataEntryScreenComponent } from './customer-data-entry-screen.component';

describe('CustomerDataEntryScreenComponent', () => {
  let component: CustomerDataEntryScreenComponent;
  let fixture: ComponentFixture<CustomerDataEntryScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDataEntryScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDataEntryScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
