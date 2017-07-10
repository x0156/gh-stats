import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { IRelease } from 'app/models/irelease';
import { ReleaseStatsService } from 'app/services/release-stats.service';
const MB = 1024 * 1024;
const KB = 1024;
@Component({
  selector: 'app-release-downloads',
  templateUrl: './release-downloads.component.html',
  styleUrls: ['./release-downloads.component.css']
})
export class ReleaseDownloadsComponent implements OnInit {

  private _user = 'cognizantqahub';
  private _repo = 'Cognizant-Intelligent-Test-Scripter';

  @Input()
  public set user(user: string) {
    if (user && user !== '') {
      this._user = user;
    }
  }
  @Input()
  public set repo(repo: string) {
    if (repo && repo !== '') {
      this._repo = repo;
    }
  }
  public get user() {
    return this._user;
  }
  public get repo() {
    return this._repo;
  }

  public releases: Observable<IRelease[]>;

  public timer = 30;

  constructor(private _releaseStats: ReleaseStatsService) {
  }

  ngOnInit() {
    this._releaseStats.tick().subscribe((any) => {
      this.timer = (100 - ((any + 1) % this._releaseStats.interval) * 100 / this._releaseStats.interval);
    });
    this.releases = this._releaseStats.getReleases(this.user, this.repo);
  }
  public stringify(object: any): string {
    return JSON.stringify(object);
  }
  public size(object: number): string {
    return object > MB ? Math.round(object / MB) + ' MB' : Math.round(object / KB) + ' KB';
  }

}
