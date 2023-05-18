import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntecedentDetailComponent } from './antecedent-detail.component';

describe('AntecedentDetailComponent', () => {
  let component: AntecedentDetailComponent;
  let fixture: ComponentFixture<AntecedentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntecedentDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntecedentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
