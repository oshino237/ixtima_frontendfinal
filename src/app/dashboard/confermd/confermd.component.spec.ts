import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfermdComponent } from './confermd.component';

describe('ConfermdComponent', () => {
  let component: ConfermdComponent;
  let fixture: ComponentFixture<ConfermdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfermdComponent]
    });
    fixture = TestBed.createComponent(ConfermdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
