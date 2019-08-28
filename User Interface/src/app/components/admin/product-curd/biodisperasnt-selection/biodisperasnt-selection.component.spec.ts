import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiodisperasntSelectionComponent } from './biodisperasnt-selection.component';

describe('BiodisperasntSelectionComponent', () => {
  let component: BiodisperasntSelectionComponent;
  let fixture: ComponentFixture<BiodisperasntSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiodisperasntSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiodisperasntSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
