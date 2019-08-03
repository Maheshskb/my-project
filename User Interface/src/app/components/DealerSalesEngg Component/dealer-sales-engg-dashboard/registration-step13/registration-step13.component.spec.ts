import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationStep13Component } from './registration-step13.component';

describe('RegistrationStep13Component', () => {
  let component: RegistrationStep13Component;
  let fixture: ComponentFixture<RegistrationStep13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationStep13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationStep13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
