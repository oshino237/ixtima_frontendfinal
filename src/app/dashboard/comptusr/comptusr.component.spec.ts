import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptusrComponent } from './comptusr.component';

describe('ComptusrComponent', () => {
  let component: ComptusrComponent;
  let fixture: ComponentFixture<ComptusrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComptusrComponent]
    });
    fixture = TestBed.createComponent(ComptusrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
