import { TestBed } from '@angular/core/testing';

import { ShowProjectApiService } from './show-project-api.service';

describe('ShowProjectApiServiceService', () => {
  let service: ShowProjectApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowProjectApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
