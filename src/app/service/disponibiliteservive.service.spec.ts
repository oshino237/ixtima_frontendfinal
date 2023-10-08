import { TestBed } from '@angular/core/testing';

import { DisponibiliteserviveService } from './disponibiliteservive.service';

describe('DisponibiliteserviveService', () => {
  let service: DisponibiliteserviveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisponibiliteserviveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
