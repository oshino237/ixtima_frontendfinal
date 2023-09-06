import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferjnComponent } from './conferjn.component';

describe('ConferjnComponent', () => {
  let component: ConferjnComponent;
  let fixture: ComponentFixture<ConferjnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConferjnComponent]
    });
    fixture = TestBed.createComponent(ConferjnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
