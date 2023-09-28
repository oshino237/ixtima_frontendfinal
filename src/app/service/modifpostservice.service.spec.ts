import { TestBed } from '@angular/core/testing';

import { ModifpostserviceService } from './modifpostservice.service';

describe('ModifpostserviceService', () => {
  let service: ModifpostserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifpostserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
