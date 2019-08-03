import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationStep6Component } from './registration-step6.component';

describe('RegistrationStep6Component', () => {
  let component: RegistrationStep6Component;
  let fixture: ComponentFixture<RegistrationStep6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationStep6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationStep6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
