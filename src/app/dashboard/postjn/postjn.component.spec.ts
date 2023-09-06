import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostjnComponent } from './postjn.component';

describe('PostjnComponent', () => {
  let component: PostjnComponent;
  let fixture: ComponentFixture<PostjnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostjnComponent]
    });
    fixture = TestBed.createComponent(PostjnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
