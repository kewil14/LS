import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockPasswordComponent } from './lock-password.component';

describe('LockPasswordComponent', () => {
  let component: LockPasswordComponent;
  let fixture: ComponentFixture<LockPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LockPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
