import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LxButtonComponent } from './lx-button.component';

describe('LxButtonComponent', () => {
  let component: LxButtonComponent;
  let fixture: ComponentFixture<LxButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LxButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LxButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
