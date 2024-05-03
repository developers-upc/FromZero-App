import { TestBed } from '@angular/core/testing';

import { DeveloperProfileApiService } from './developer-profile-api.service';

describe('DeveloperProfileApiService', () => {
  let service: DeveloperProfileApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeveloperProfileApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
