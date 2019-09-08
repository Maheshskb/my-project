import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesManagerHoSignInComponent } from './sales-manager-ho-sign-in.component';

describe('SalesManagerHoSignInComponent', () => {
  let component: SalesManagerHoSignInComponent;
  let fixture: ComponentFixture<SalesManagerHoSignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesManagerHoSignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesManagerHoSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
