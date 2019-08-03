import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalForPennarSalesEngineerComponent } from './approval-for-pennar-sales-engineer.component';

describe('ApprovalForPennarSalesEngineerComponent', () => {
  let component: ApprovalForPennarSalesEngineerComponent;
  let fixture: ComponentFixture<ApprovalForPennarSalesEngineerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalForPennarSalesEngineerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalForPennarSalesEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
