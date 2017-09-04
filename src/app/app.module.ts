import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { ReleaseDownloadsComponent, ReleasesComponent } from './stats';
import { StatsService } from './services/stats.service';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent, GitHubComponent } from './pages';
import { GitHubService } from './services/git-hub.service';
import { TrafficComponent } from './stats/traffic/traffic.component';
import { ViewsComponent } from './stats/traffic/views.component';
import { NgXBarComponent } from './stats/traffic/ngxbar.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { InViewportModule } from 'ng-in-viewport';
import 'intersection-observer';
import { ReposDialogComponent } from 'app/pages/git-hub/repos-dialog.component';

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
    NgXBarComponent,
    ReposDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    NgxChartsModule,
    InViewportModule.forRoot()
  ],
  entryComponents: [ReposDialogComponent],
  providers: [StatsService, GitHubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
