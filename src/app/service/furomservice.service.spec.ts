import { TestBed } from '@angular/core/testing';

import { FuromserviceService } from './furomservice.service';

describe('FuromserviceService', () => {
  let service: FuromserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuromserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
