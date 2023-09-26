import { TestBed } from '@angular/core/testing';
import { Ajpost } from './ajpost';

describe('Ajpost', () => {
  let service:Ajpost;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ajpost);
  });
  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
