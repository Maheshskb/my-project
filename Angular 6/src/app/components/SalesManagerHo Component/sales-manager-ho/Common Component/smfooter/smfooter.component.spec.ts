import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SMFooterComponent } from './smfooter.component';

describe('SMFooterComponent', () => {
  let component: SMFooterComponent;
  let fixture: ComponentFixture<SMFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SMFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SMFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
