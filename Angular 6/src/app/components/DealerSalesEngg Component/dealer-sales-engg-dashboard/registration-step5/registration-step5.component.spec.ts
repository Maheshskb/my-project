import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationStep5Component } from './registration-step5.component';

describe('RegistrationStep5Component', () => {
  let component: RegistrationStep5Component;
  let fixture: ComponentFixture<RegistrationStep5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationStep5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationStep5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
