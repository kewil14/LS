import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrantValueComponent } from './intrant-value.component';

describe('IntrantValueComponent', () => {
  let component: IntrantValueComponent;
  let fixture: ComponentFixture<IntrantValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntrantValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntrantValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
