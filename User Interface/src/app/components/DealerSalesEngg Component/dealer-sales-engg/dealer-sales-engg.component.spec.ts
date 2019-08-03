import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerSalesEnggComponent } from './dealer-sales-engg.component';

describe('DealerSalesEnggComponent', () => {
  let component: DealerSalesEnggComponent;
  let fixture: ComponentFixture<DealerSalesEnggComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerSalesEnggComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerSalesEnggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
