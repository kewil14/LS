import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDetailAntecedentComponent } from './display-detail-antecedent.component';

describe('DisplayDetailAntecedentComponent', () => {
  let component: DisplayDetailAntecedentComponent;
  let fixture: ComponentFixture<DisplayDetailAntecedentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDetailAntecedentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDetailAntecedentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
