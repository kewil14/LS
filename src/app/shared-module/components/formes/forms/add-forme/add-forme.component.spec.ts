import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormeComponent } from './add-forme.component';

describe('AddFormeComponent', () => {
  let component: AddFormeComponent;
  let fixture: ComponentFixture<AddFormeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFormeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
