import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadcateComponent } from './loadcate.component';

describe('LoadcateComponent', () => {
  let component: LoadcateComponent;
  let fixture: ComponentFixture<LoadcateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadcateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadcateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
