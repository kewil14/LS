import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDetailLaboratoireComponent } from './display-detail-laboratoire.component';

describe('DisplayDetailLaboratoireComponent', () => {
  let component: DisplayDetailLaboratoireComponent;
  let fixture: ComponentFixture<DisplayDetailLaboratoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDetailLaboratoireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDetailLaboratoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
