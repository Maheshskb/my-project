import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationStep11Component } from './registration-step11.component';

describe('RegistrationStep11Component', () => {
  let component: RegistrationStep11Component;
  let fixture: ComponentFixture<RegistrationStep11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationStep11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationStep11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
