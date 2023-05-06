import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrantsComponent } from './intrants.component';

describe('IntrantsComponent', () => {
  let component: IntrantsComponent;
  let fixture: ComponentFixture<IntrantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntrantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
