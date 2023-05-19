import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDetailFamilleComponent } from './display-detail-famille.component';

describe('DisplayDetailFamilleComponent', () => {
  let component: DisplayDetailFamilleComponent;
  let fixture: ComponentFixture<DisplayDetailFamilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDetailFamilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDetailFamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
