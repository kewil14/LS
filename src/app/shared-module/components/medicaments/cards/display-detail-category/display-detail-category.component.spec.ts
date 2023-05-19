import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDetailCategoryComponent } from './display-detail-category.component';

describe('DisplayDetailCategoryComponent', () => {
  let component: DisplayDetailCategoryComponent;
  let fixture: ComponentFixture<DisplayDetailCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDetailCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDetailCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
