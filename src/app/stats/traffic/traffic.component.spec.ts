import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdSnackBar } from '@angular/material';
import { HttpModule, JsonpModule } from '@angular/http';
import { GitHubService } from 'app/services/git-hub.service';
import { StatsService } from 'app/services/stats.service';
import { TrafficComponent } from './traffic.component';
import { ViewsComponent } from './views.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

describe('TrafficComponent', () => {
  let component: TrafficComponent;
  let fixture: ComponentFixture<TrafficComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrafficComponent, ViewsComponent],
      providers: [StatsService, GitHubService, MdSnackBar],
      imports: [MaterialModule, BrowserAnimationsModule, HttpModule, NgxChartsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
