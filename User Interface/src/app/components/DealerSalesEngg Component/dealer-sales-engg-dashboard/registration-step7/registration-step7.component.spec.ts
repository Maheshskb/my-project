import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationStep7Component } from './registration-step7.component';

describe('RegistrationStep7Component', () => {
  let component: RegistrationStep7Component;
  let fixture: ComponentFixture<RegistrationStep7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationStep7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationStep7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
