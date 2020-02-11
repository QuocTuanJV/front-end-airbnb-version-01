import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMyBookingComponent } from './list-my-booking.component';

describe('ListMyBookingComponent', () => {
  let component: ListMyBookingComponent;
  let fixture: ComponentFixture<ListMyBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMyBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMyBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
