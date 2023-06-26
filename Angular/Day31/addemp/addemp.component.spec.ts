import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddempComponent } from './addemp.component';

describe('AddempComponent', () => {
  let component: AddempComponent;
  let fixture: ComponentFixture<AddempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
