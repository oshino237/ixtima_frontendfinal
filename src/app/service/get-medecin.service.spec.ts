import { TestBed } from '@angular/core/testing';

import { GetMedecinService } from './get-medecin.service';

describe('GetMedecinService', () => {
  let service: GetMedecinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMedecinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
