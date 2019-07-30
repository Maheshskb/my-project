import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfDealersComponent } from './list-of-dealers.component';

describe('ListOfDealersComponent', () => {
  let component: ListOfDealersComponent;
  let fixture: ComponentFixture<ListOfDealersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfDealersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfDealersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
