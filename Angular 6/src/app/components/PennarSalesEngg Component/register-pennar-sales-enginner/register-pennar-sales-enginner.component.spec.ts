import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPennarSalesEnginnerComponent } from './register-pennar-sales-enginner.component';

describe('RegisterPennarSalesEnginnerComponent', () => {
  let component: RegisterPennarSalesEnginnerComponent;
  let fixture: ComponentFixture<RegisterPennarSalesEnginnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPennarSalesEnginnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPennarSalesEnginnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
