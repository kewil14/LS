import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAllergieComponent } from './type-allergie.component';

describe('TypeAllergieComponent', () => {
  let component: TypeAllergieComponent;
  let fixture: ComponentFixture<TypeAllergieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeAllergieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeAllergieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
