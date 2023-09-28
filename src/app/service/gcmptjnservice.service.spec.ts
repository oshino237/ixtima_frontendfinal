import { TestBed } from '@angular/core/testing';

import { GcmptjnserviceService } from './gcmptjnservice.service';

describe('GcmptjnserviceService', () => {
  let service: GcmptjnserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GcmptjnserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
