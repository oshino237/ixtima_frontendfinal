import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmptmedComponent } from './cmptmed.component';

describe('CmptmedComponent', () => {
  let component: CmptmedComponent;
  let fixture: ComponentFixture<CmptmedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmptmedComponent]
    });
    fixture = TestBed.createComponent(CmptmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
