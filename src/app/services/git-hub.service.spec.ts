import { TestBed, inject } from '@angular/core/testing';
import { MdSnackBar } from '@angular/material';
import { HttpModule, JsonpModule } from '@angular/http';
import { GitHubService } from './git-hub.service';
import { MaterialModule } from '@angular/material';
describe('GitHubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitHubService, MdSnackBar],
      imports: [HttpModule, MaterialModule]
    });
  });

  it('should be created', inject([GitHubService], (service: GitHubService) => {
    expect(service).toBeTruthy();
  }));
    it('should have interval > 300 seconds', inject([GitHubService], (service: GitHubService) => {
    expect(service.interval).toBeGreaterThan(299);
  }));
});
