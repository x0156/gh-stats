import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { GitHubComponent } from './git-hub.component';
import { ChartsModule } from 'ng2-charts';
import { GitHubService } from '../../services/git-hub.service';
import { StatsService } from '../../services/stats.service';
import { TrafficComponent } from '../../stats/traffic/traffic.component';
import { ViewsComponent } from '../../stats/traffic/views.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ReleaseDownloadsComponent, ReleasesComponent } from '../../stats';
describe('GitHubComponent', () => {
  let component: GitHubComponent;
  let fixture: ComponentFixture<GitHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GitHubComponent, ReleaseDownloadsComponent, TrafficComponent, ReleasesComponent,
        ViewsComponent],
      providers: [GitHubService, StatsService],
      imports: [RouterTestingModule, MaterialModule, ChartsModule, HttpModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
