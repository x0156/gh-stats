import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { ReleaseDownloadsComponent, ReleasesComponent } from './stats';
import { StatsService } from './services/stats.service';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { PageNotFoundComponent, GitHubComponent } from './pages';
import { GitHubService } from './services/git-hub.service';
import { TrafficComponent } from './stats/traffic/traffic.component';
import { ViewsComponent } from './stats/traffic/views.component';
import { NgXBarComponent } from './stats/traffic/ngxbar.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: GitHubComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ReleaseDownloadsComponent,
    ReleasesComponent,
    PageNotFoundComponent,
    GitHubComponent,
    TrafficComponent,
    ViewsComponent,
    NgXBarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule,
    NgxChartsModule
  ],
  providers: [StatsService, GitHubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
