import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HopiComponent } from './hopi.component';

describe('HopiComponent', () => {
  let component: HopiComponent;
  let fixture: ComponentFixture<HopiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HopiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HopiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
