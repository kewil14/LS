/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddAntecedentValueComponent } from './add-antecedent-value.component';

describe('AddAntecedentValueComponent', () => {
  let component: AddAntecedentValueComponent;
  let fixture: ComponentFixture<AddAntecedentValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAntecedentValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAntecedentValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
