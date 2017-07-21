import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { GitHubComponent } from './git-hub.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GitHubService } from '../../services/git-hub.service';
import { StatsService } from '../../services/stats.service';
import { TrafficComponent } from '../../stats/traffic/traffic.component';
import { ViewsComponent } from '../../stats/traffic/views.component';
import { HttpModule } from '@angular/http';
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
      imports: [RouterTestingModule, MaterialModule, NgxChartsModule, HttpModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
