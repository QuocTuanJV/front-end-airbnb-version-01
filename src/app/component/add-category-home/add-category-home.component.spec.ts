import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryHomeComponent } from './add-category-home.component';

describe('AddCategoryHomeComponent', () => {
  let component: AddCategoryHomeComponent;
  let fixture: ComponentFixture<AddCategoryHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCategoryHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategoryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
