import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitmentsComponent } from './traitments.component';

describe('TraitmentsComponent', () => {
  let component: TraitmentsComponent;
  let fixture: ComponentFixture<TraitmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraitmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraitmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
