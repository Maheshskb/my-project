import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PraposalFormatComponent } from './praposal-format.component';

describe('PraposalFormatComponent', () => {
  let component: PraposalFormatComponent;
  let fixture: ComponentFixture<PraposalFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PraposalFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PraposalFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
