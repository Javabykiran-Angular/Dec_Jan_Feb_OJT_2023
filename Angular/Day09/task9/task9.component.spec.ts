import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task9Component } from './task9.component';

describe('Task9Component', () => {
  let component: Task9Component;
  let fixture: ComponentFixture<Task9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
