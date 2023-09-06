import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousthmComponent } from './sousthm.component';

describe('SousthmComponent', () => {
  let component: SousthmComponent;
  let fixture: ComponentFixture<SousthmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SousthmComponent]
    });
    fixture = TestBed.createComponent(SousthmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
