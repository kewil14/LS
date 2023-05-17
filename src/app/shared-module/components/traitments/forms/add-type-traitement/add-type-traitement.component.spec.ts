import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeTraitementComponent } from './add-type-traitement.component';

describe('AddTypeTraitementComponent', () => {
  let component: AddTypeTraitementComponent;
  let fixture: ComponentFixture<AddTypeTraitementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTypeTraitementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTypeTraitementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
