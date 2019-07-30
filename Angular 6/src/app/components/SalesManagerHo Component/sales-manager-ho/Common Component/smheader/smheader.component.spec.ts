import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SMHeaderComponent } from './smheader.component';

describe('SMHeaderComponent', () => {
  let component: SMHeaderComponent;
  let fixture: ComponentFixture<SMHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SMHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SMHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
