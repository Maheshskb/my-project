import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PennarSalesEnggDashboardComponent } from './pennar-sales-engg-dashboard.component';

describe('PennarSalesEnggDashboardComponent', () => {
  let component: PennarSalesEnggDashboardComponent;
  let fixture: ComponentFixture<PennarSalesEnggDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PennarSalesEnggDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PennarSalesEnggDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
