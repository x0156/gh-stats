import { TestBed, inject } from '@angular/core/testing';

import { ReleaseStatsService } from './release-stats.service';

describe('ReleaseStatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReleaseStatsService]
    });
  });

  it('should be created', inject([ReleaseStatsService], (service: ReleaseStatsService) => {
    expect(service).toBeTruthy();
  }));
});
