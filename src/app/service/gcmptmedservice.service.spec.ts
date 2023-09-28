import { TestBed } from '@angular/core/testing';

import { GcmptmedserviceService } from './gcmptmedservice.service';

describe('GcmptmedserviceService', () => {
  let service: GcmptmedserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GcmptmedserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
