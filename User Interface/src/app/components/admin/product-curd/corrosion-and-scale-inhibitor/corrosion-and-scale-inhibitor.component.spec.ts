import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrosionAndScaleInhibitorComponent } from './corrosion-and-scale-inhibitor.component';

describe('CorrosionAndScaleInhibitorComponent', () => {
  let component: CorrosionAndScaleInhibitorComponent;
  let fixture: ComponentFixture<CorrosionAndScaleInhibitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrosionAndScaleInhibitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrosionAndScaleInhibitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
