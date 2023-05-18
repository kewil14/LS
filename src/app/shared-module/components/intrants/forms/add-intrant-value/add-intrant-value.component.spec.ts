import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIntrantValueComponent } from './add-intrant-value.component';

describe('AddIntrantValueComponent', () => {
  let component: AddIntrantValueComponent;
  let fixture: ComponentFixture<AddIntrantValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIntrantValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddIntrantValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
