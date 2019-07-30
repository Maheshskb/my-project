import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofsalesengineerComponent } from './listofsalesengineer.component';

describe('ListofsalesengineerComponent', () => {
  let component: ListofsalesengineerComponent;
  let fixture: ComponentFixture<ListofsalesengineerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofsalesengineerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofsalesengineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
