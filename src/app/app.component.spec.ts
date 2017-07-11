import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { ReleaseDownloadsComponent } from './stats/release-downloads/release-downloads.component';
import { ReleaseStatsService } from './services/release-stats.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ReleaseDownloadsComponent
      ],
      providers: [ReleaseStatsService],
      imports: [MaterialModule, HttpModule, JsonpModule, BrowserAnimationsModule]
    }).compileComponents();
  fixture = TestBed.createComponent(AppComponent);
  component = fixture.debugElement.componentInstance;
}));


  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should render tabs', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('md-tab-group')).toBeTruthy();
  }));
  it(`should render all the tabs`, (() => {
    component.title = '!';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.mat-tab-label').length)
      .toBe(component.tabs.length);
  }));
});
