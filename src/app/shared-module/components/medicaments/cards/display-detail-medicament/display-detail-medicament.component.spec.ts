import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDetailMedicamentComponent } from './display-detail-medicament.component';

describe('DisplayDetailMedicamentComponent', () => {
  let component: DisplayDetailMedicamentComponent;
  let fixture: ComponentFixture<DisplayDetailMedicamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDetailMedicamentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDetailMedicamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
