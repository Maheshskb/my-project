import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationStep8Component } from './registration-step8.component';

describe('RegistrationStep8Component', () => {
  let component: RegistrationStep8Component;
  let fixture: ComponentFixture<RegistrationStep8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationStep8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationStep8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
