import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculatingWaterDetailsComponent } from './circulating-water-details.component';

describe('CirculatingWaterDetailsComponent', () => {
  let component: CirculatingWaterDetailsComponent;
  let fixture: ComponentFixture<CirculatingWaterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirculatingWaterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirculatingWaterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
