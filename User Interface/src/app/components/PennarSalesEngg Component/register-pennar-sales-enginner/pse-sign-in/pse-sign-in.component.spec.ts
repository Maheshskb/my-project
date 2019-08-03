import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PseSignInComponent } from './pse-sign-in.component';

describe('PseSignInComponent', () => {
  let component: PseSignInComponent;
  let fixture: ComponentFixture<PseSignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PseSignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PseSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
