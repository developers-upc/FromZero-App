import { TestBed } from '@angular/core/testing';

import { EntepriseProfileServiceService } from './enteprise-profile-service.service';

describe('EntepriseProfileServiceService', () => {
  let service: EntepriseProfileServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntepriseProfileServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
