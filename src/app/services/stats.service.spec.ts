import { TestBed, inject } from '@angular/core/testing';
import { MdSnackBar } from '@angular/material';
import { HttpModule, JsonpModule } from '@angular/http';
import { GitHubService } from './git-hub.service';
import { MaterialModule } from '@angular/material';
import { StatsService } from './stats.service';

describe('StatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatsService, GitHubService, MdSnackBar],
      imports: [HttpModule, MaterialModule]
    });
  });

});
