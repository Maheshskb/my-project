import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfPennarSalesEngineerComponent } from './list-of-pennar-sales-engineer.component';

describe('ListOfPennarSalesEngineerComponent', () => {
  let component: ListOfPennarSalesEngineerComponent;
  let fixture: ComponentFixture<ListOfPennarSalesEngineerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfPennarSalesEngineerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfPennarSalesEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
