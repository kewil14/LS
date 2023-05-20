import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDetailRadioComponent } from './display-detail-radio.component';

describe('DisplayDetailRadioComponent', () => {
  let component: DisplayDetailRadioComponent;
  let fixture: ComponentFixture<DisplayDetailRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDetailRadioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDetailRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
