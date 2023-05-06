import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeIntrantComponent } from './add-type-intrant.component';

describe('AddTypeIntrantComponent', () => {
  let component: AddTypeIntrantComponent;
  let fixture: ComponentFixture<AddTypeIntrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTypeIntrantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTypeIntrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
