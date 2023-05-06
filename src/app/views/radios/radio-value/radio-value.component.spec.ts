import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioValueComponent } from './radio-value.component';

describe('RadioValueComponent', () => {
  let component: RadioValueComponent;
  let fixture: ComponentFixture<RadioValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
