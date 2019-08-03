import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationStep10Component } from './registration-step10.component';

describe('RegistrationStep10Component', () => {
  let component: RegistrationStep10Component;
  let fixture: ComponentFixture<RegistrationStep10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationStep10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationStep10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
