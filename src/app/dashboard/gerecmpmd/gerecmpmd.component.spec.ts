import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerecmpmdComponent } from './gerecmpmd.component';

describe('GerecmpmdComponent', () => {
  let component: GerecmpmdComponent;
  let fixture: ComponentFixture<GerecmpmdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerecmpmdComponent]
    });
    fixture = TestBed.createComponent(GerecmpmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
