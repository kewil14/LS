import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitmentValueComponent } from './traitment-value.component';

describe('TraitmentValueComponent', () => {
  let component: TraitmentValueComponent;
  let fixture: ComponentFixture<TraitmentValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraitmentValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraitmentValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
