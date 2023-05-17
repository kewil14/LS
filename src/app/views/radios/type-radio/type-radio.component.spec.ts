import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeRadioComponent } from './type-radio.component';

describe('TypeRadioComponent', () => {
  let component: TypeRadioComponent;
  let fixture: ComponentFixture<TypeRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeRadioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
