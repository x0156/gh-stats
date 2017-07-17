import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ReleaseDownloadsComponent } from './stats/release-downloads/release-downloads.component';
import { StatsService } from './services/stats.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterTestingModule } from '@angular/router/testing';
import { APP_BASE_HREF } from '@angular/common';
describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ReleaseDownloadsComponent
      ],
      providers: [StatsService, { provide: APP_BASE_HREF, useValue: '/' }],
      imports: [MaterialModule, HttpModule,
        RouterTestingModule.withRoutes([]),
        NgxChartsModule
        , BrowserAnimationsModule]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  }));


  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

});
