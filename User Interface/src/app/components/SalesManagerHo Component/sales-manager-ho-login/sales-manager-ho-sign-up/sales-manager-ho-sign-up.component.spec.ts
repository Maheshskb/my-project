import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesManagerHoSignUpComponent } from './sales-manager-ho-sign-up.component';

describe('SalesManagerHoSignUpComponent', () => {
  let component: SalesManagerHoSignUpComponent;
  let fixture: ComponentFixture<SalesManagerHoSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesManagerHoSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesManagerHoSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
