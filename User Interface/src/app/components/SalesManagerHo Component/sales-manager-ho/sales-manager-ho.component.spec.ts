import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesManagerHOComponent } from './sales-manager-ho.component';

describe('SalesManagerHOComponent', () => {
  let component: SalesManagerHOComponent;
  let fixture: ComponentFixture<SalesManagerHOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesManagerHOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesManagerHOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
