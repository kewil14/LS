import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntecedentValueComponent } from './antecedent-value.component';

describe('AntecedentValueComponent', () => {
  let component: AntecedentValueComponent;
  let fixture: ComponentFixture<AntecedentValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntecedentValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntecedentValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
