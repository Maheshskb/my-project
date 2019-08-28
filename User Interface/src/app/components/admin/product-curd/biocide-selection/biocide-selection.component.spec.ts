import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiocideSelectionComponent } from './biocide-selection.component';

describe('BiocideSelectionComponent', () => {
  let component: BiocideSelectionComponent;
  let fixture: ComponentFixture<BiocideSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiocideSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiocideSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
