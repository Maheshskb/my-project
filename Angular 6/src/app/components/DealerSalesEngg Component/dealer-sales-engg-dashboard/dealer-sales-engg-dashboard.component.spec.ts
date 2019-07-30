import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerSalesEnggDashboardComponent } from './dealer-sales-engg-dashboard.component';

describe('DealerSalesEnggDashboardComponent', () => {
  let component: DealerSalesEnggDashboardComponent;
  let fixture: ComponentFixture<DealerSalesEnggDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerSalesEnggDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerSalesEnggDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
