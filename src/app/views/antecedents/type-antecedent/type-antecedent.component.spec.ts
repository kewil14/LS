import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAntecedentComponent } from './type-antecedent.component';

describe('TypeAntecedentComponent', () => {
  let component: TypeAntecedentComponent;
  let fixture: ComponentFixture<TypeAntecedentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeAntecedentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeAntecedentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
