import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamillesComponent } from './familles.component';

describe('FamillesComponent', () => {
  let component: FamillesComponent;
  let fixture: ComponentFixture<FamillesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamillesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
