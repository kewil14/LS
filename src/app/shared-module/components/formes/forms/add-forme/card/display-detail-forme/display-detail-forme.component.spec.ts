import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDetailFormeComponent } from './display-detail-forme.component';

describe('DisplayDetailFormeComponent', () => {
  let component: DisplayDetailFormeComponent;
  let fixture: ComponentFixture<DisplayDetailFormeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDetailFormeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDetailFormeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
