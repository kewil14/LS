import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDetailDciComponent } from './display-detail-dci.component';

describe('DisplayDetailDciComponent', () => {
  let component: DisplayDetailDciComponent;
  let fixture: ComponentFixture<DisplayDetailDciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDetailDciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDetailDciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
