import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoireValueComponent } from './laboratoire-value.component';

describe('LaboratoireValueComponent', () => {
  let component: LaboratoireValueComponent;
  let fixture: ComponentFixture<LaboratoireValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboratoireValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboratoireValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
