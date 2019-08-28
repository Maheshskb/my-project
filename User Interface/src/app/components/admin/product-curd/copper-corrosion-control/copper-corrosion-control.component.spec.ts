import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopperCorrosionControlComponent } from './copper-corrosion-control.component';

describe('CopperCorrosionControlComponent', () => {
  let component: CopperCorrosionControlComponent;
  let fixture: ComponentFixture<CopperCorrosionControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopperCorrosionControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopperCorrosionControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
