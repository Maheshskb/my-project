import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesManagerHoLoginComponent } from './sales-manager-ho-login.component';

describe('SalesManagerHoLoginComponent', () => {
  let component: SalesManagerHoLoginComponent;
  let fixture: ComponentFixture<SalesManagerHoLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesManagerHoLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesManagerHoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
