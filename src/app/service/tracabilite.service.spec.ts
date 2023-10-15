import { TestBed } from '@angular/core/testing';

import { TracabiliteService } from './tracabilite.service';

describe('TracabiliteService', () => {
  let service: TracabiliteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TracabiliteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
