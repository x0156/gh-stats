import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IRelease } from 'app/models/irelease';
import { StatsService } from 'app/services/stats.service';
const MB = 1024 * 1024;
const KB = 1024;
@Component({
  selector: 'app-release-downloads',
  templateUrl: './release-downloads.component.html',
  styleUrls: ['./release-downloads.component.css']
})
export class ReleaseDownloadsComponent implements OnInit {
  @Input()
  public user;
  @Input()
  public repo;

  public releases: Observable<IRelease[]>;

  constructor(private stats: StatsService) {
  }

  ngOnInit() {
    this.releases = this.stats.getReleases(this.user, this.repo);
  }
  public stringify(object: any): string {
    return JSON.stringify(object);
  }
  public size(object: number): string {
    return object > MB ? Math.round(object / MB) + ' MB' : Math.round(object / KB) + ' KB';
  }

}
