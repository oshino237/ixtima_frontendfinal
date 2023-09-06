import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvmdComponent } from './rdvmd.component';

describe('RdvmdComponent', () => {
  let component: RdvmdComponent;
  let fixture: ComponentFixture<RdvmdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RdvmdComponent]
    });
    fixture = TestBed.createComponent(RdvmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
