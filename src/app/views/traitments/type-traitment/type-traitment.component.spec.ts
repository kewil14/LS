import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTraitmentComponent } from './type-traitment.component';

describe('TypeTraitmentComponent', () => {
  let component: TypeTraitmentComponent;
  let fixture: ComponentFixture<TypeTraitmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeTraitmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeTraitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
