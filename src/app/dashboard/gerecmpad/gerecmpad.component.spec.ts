import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerecmpadComponent } from './gerecmpad.component';

describe('GerecmpadComponent', () => {
  let component: GerecmpadComponent;
  let fixture: ComponentFixture<GerecmpadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerecmpadComponent]
    });
    fixture = TestBed.createComponent(GerecmpadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
