import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PseSignUpComponent } from './pse-sign-up.component';

describe('PseSignUpComponent', () => {
  let component: PseSignUpComponent;
  let fixture: ComponentFixture<PseSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PseSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PseSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
