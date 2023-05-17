import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeLaboratoireComponent } from './add-type-laboratoire.component';

describe('AddTypeLaboratoireComponent', () => {
  let component: AddTypeLaboratoireComponent;
  let fixture: ComponentFixture<AddTypeLaboratoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTypeLaboratoireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTypeLaboratoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
