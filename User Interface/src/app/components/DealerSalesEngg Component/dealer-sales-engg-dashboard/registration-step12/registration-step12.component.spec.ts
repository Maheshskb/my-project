import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationStep12Component } from './registration-step12.component';

describe('RegistrationStep12Component', () => {
  let component: RegistrationStep12Component;
  let fixture: ComponentFixture<RegistrationStep12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationStep12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationStep12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
