import { TestBed } from '@angular/core/testing';

import { SoustmserviceService } from './soustmservice.service';

describe('SoustmserviceService', () => {
  let service: SoustmserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoustmserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
