import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryRoomComponent } from './add-category-room.component';

describe('AddCategoryRoomComponent', () => {
  let component: AddCategoryRoomComponent;
  let fixture: ComponentFixture<AddCategoryRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCategoryRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategoryRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
