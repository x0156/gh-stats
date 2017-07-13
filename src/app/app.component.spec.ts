import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { ReleaseDownloadsComponent } from './stats/release-downloads/release-downloads.component';
import { StatsService } from './services/stats.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { RouterTestingModule } from '@angular/router/testing';
describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ReleaseDownloadsComponent
      ],
      providers: [StatsService],
      imports: [MaterialModule, HttpModule, JsonpModule,
        RouterTestingModule.withRoutes([]),
        ChartsModule
        , BrowserAnimationsModule]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  }));


  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

});
