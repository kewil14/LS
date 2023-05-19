import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitmentDetailComponent } from './traitment-detail.component';

describe('TraitmentDetailComponent', () => {
  let component: TraitmentDetailComponent;
  let fixture: ComponentFixture<TraitmentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraitmentDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraitmentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
