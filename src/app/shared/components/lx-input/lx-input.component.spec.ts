import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LxInputComponent } from './lx-input.component';

describe('LxInputComponent', () => {
  let component: LxInputComponent;
  let fixture: ComponentFixture<LxInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LxInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LxInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
