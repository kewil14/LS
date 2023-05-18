import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrantDetailComponent } from './intrant-detail.component';

describe('IntrantDetailComponent', () => {
  let component: IntrantDetailComponent;
  let fixture: ComponentFixture<IntrantDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntrantDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntrantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
