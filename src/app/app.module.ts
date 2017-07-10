import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { ReleaseDownloadsComponent } from './stats/release-downloads/release-downloads.component';
import { ReleaseStatsService } from './services/release-stats.service';

@NgModule({
  declarations: [
    AppComponent,
    ReleaseDownloadsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ReleaseStatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
