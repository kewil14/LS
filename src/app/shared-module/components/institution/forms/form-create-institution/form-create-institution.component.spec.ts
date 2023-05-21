import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateInstitutionComponent } from './form-create-institution.component';

describe('FormCreateInstitutionComponent', () => {
  let component: FormCreateInstitutionComponent;
  let fixture: ComponentFixture<FormCreateInstitutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreateInstitutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCreateInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
