import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDetailAllergieComponent } from './display-detail-allergie.component';

describe('DisplayDetailAllergieComponent', () => {
  let component: DisplayDetailAllergieComponent;
  let fixture: ComponentFixture<DisplayDetailAllergieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDetailAllergieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDetailAllergieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
