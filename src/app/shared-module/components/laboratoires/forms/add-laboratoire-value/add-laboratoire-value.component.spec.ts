import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLaboratoireValueComponent } from './add-laboratoire-value.component';

describe('AddLaboratoireValueComponent', () => {
  let component: AddLaboratoireValueComponent;
  let fixture: ComponentFixture<AddLaboratoireValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLaboratoireValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLaboratoireValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
