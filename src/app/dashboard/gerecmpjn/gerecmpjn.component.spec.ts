import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerecmpjnComponent } from './gerecmpjn.component';

describe('GerecmpjnComponent', () => {
  let component: GerecmpjnComponent;
  let fixture: ComponentFixture<GerecmpjnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerecmpjnComponent]
    });
    fixture = TestBed.createComponent(GerecmpjnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
