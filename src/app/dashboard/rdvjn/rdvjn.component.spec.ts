import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvjnComponent } from './rdvjn.component';

describe('RdvjnComponent', () => {
  let component: RdvjnComponent;
  let fixture: ComponentFixture<RdvjnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RdvjnComponent]
    });
    fixture = TestBed.createComponent(RdvjnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
