import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDciComponent } from './add-dci.component';

describe('AddDciComponent', () => {
  let component: AddDciComponent;
  let fixture: ComponentFixture<AddDciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
