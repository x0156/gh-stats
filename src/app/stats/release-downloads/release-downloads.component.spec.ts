import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReleaseDownloadsComponent } from './release-downloads.component';
import { ReleaseStatsService } from '../../services/release-stats.service';
import { HttpModule, JsonpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';

describe('ReleaseDownloadsComponent', () => {
  let component: ReleaseDownloadsComponent;
  let fixture: ComponentFixture<ReleaseDownloadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReleaseDownloadsComponent],
      providers: [ReleaseStatsService],
      imports: [MaterialModule, BrowserAnimationsModule, HttpModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseDownloadsComponent);
    component = fixture.componentInstance;
    component.user = 'x0156';
    component.repo = 'gh-stats';
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('should render progress-bar', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('md-progress-bar')).toBeTruthy();
  }));
  it('should have title', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.mat-button-wrapper > a').text)
      .toBe('gh-stats');
  });
  it('should have link', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.mat-button-wrapper > a').href)
      .toBe('http://github.com/x0156/gh-stats/releases');
  });

  it('should load release details', () => {
    const mockRelease = {
      tag_name: '1.0', name: 'v1.0', prerelease: false, published_at: '2017-06-20T14:31:31'
      , assets: [{
        download_count: 623, name: 'v-1.0-setup.zip', size: 65595402
      }]
    }
    component.releases = Observable.of(<any>[mockRelease]);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(document.querySelector('md-card-title').innerHTML.trim())
      .toBe(mockRelease.name);
    expect(document.querySelector('md-card-subtitle').innerHTML.trim())
      .toBe('Tuesday, June 20, 2017');
    expect(document.querySelectorAll('md-card-content  md-chip')[0].innerHTML.trim())
      .toBe('623');
    expect(document.querySelectorAll('md-card-content  md-chip')[1].innerHTML.trim())
      .toBe('63 MB');
  });
});
