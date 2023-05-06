import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeLaboratoireComponent } from './type-laboratoire.component';

describe('TypeLaboratoireComponent', () => {
  let component: TypeLaboratoireComponent;
  let fixture: ComponentFixture<TypeLaboratoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeLaboratoireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeLaboratoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
