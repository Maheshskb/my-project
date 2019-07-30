import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DSESignUpComponent } from './dse-sign-up.component';

describe('DSESignUpComponent', () => {
  let component: DSESignUpComponent;
  let fixture: ComponentFixture<DSESignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DSESignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DSESignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
