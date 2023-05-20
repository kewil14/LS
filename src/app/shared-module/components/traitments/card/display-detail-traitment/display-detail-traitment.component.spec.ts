import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDetailTraitmentComponent } from './display-detail-traitment.component';

describe('DisplayDetailTraitmentComponent', () => {
  let component: DisplayDetailTraitmentComponent;
  let fixture: ComponentFixture<DisplayDetailTraitmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDetailTraitmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDetailTraitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
