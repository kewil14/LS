import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergieValueComponent } from './allergie-value.component';

describe('AllergieValueComponent', () => {
  let component: AllergieValueComponent;
  let fixture: ComponentFixture<AllergieValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllergieValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllergieValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
