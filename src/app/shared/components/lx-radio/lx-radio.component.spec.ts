import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LxRadioComponent } from './lx-radio.component';

describe('LxRadioComponent', () => {
  let component: LxRadioComponent;
  let fixture: ComponentFixture<LxRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LxRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LxRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
