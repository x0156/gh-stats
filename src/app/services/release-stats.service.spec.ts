import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { ReleaseStatsService } from './release-stats.service';

describe('ReleaseStatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReleaseStatsService],
      imports: [ HttpModule]
    });
  });

  it('should be created', inject([ReleaseStatsService], (service: ReleaseStatsService) => {
    expect(service).toBeTruthy();
  }));
  it('should have interval > 300 seconds', inject([ReleaseStatsService], (service: ReleaseStatsService) => {
    expect(service.interval ).toBeGreaterThan(299);
  }));

});
