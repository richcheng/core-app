import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LxInputEmailComponent } from './lx-input-email.component';

describe('LxInputEmailComponent', () => {
  let component: LxInputEmailComponent;
  let fixture: ComponentFixture<LxInputEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LxInputEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LxInputEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
