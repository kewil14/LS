import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTraitementValueComponent } from './add-traitement-value.component';

describe('AddTraitementValueComponent', () => {
  let component: AddTraitementValueComponent;
  let fixture: ComponentFixture<AddTraitementValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTraitementValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTraitementValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
