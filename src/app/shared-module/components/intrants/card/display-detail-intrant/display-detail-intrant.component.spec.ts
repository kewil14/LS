import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDetailIntrantComponent } from './display-detail-intrant.component';

describe('DisplayDetailIntrantComponent', () => {
  let component: DisplayDetailIntrantComponent;
  let fixture: ComponentFixture<DisplayDetailIntrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDetailIntrantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDetailIntrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
