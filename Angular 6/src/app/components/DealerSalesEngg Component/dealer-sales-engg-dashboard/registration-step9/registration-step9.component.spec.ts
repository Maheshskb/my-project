import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationStep9Component } from './registration-step9.component';

describe('RegistrationStep9Component', () => {
  let component: RegistrationStep9Component;
  let fixture: ComponentFixture<RegistrationStep9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationStep9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationStep9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
