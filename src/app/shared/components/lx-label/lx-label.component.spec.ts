import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LxLabelComponent } from './lx-label.component';

describe('LxLabelComponent', () => {
  let component: LxLabelComponent;
  let fixture: ComponentFixture<LxLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LxLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LxLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
