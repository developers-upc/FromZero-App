import { TestBed } from '@angular/core/testing';

import { ProjectProfileApiService } from './project-profile-api.service';

describe('ProjectProfileApiServiceService', () => {
  let service: ProjectProfileApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectProfileApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
