import { TestBed } from '@angular/core/testing';

import { HighlightsProjectServiceService } from './highlights-project-service.service';

describe('HighlightsProjectServiceService', () => {
  let service: HighlightsProjectServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HighlightsProjectServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
