import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostmdComponent } from './postmd.component';

describe('PostmdComponent', () => {
  let component: PostmdComponent;
  let fixture: ComponentFixture<PostmdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostmdComponent]
    });
    fixture = TestBed.createComponent(PostmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
