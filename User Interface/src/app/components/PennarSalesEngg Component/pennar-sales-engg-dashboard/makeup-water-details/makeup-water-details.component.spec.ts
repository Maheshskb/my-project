import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeupWaterDetailsComponent } from './makeup-water-details.component';

describe('MakeupWaterDetailsComponent', () => {
  let component: MakeupWaterDetailsComponent;
  let fixture: ComponentFixture<MakeupWaterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeupWaterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeupWaterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
