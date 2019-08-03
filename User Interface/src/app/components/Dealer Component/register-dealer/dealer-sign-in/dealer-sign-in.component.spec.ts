import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerSignInComponent } from './dealer-sign-in.component';

describe('DealerSignInComponent', () => {
  let component: DealerSignInComponent;
  let fixture: ComponentFixture<DealerSignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerSignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
