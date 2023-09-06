import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracabiliteComponent } from './tracabilite.component';

describe('TracabiliteComponent', () => {
  let component: TracabiliteComponent;
  let fixture: ComponentFixture<TracabiliteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TracabiliteComponent]
    });
    fixture = TestBed.createComponent(TracabiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
