import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'
import { GitHubService } from './git-hub.service';
import { IRelease } from 'app/models/irelease';
const INT_SEC = 300;
@Injectable()
export class StatsService {

  constructor(private ghapi: GitHubService) { }

  public getReleases(user: string, repo: string): Observable<IRelease[]> {
    return this.ghapi.tick(INT_SEC).flatMap((any) => this.ghapi.getReleases({ user, repo }));
  }
  public getTraffic(config, type: string): Observable<IRelease[]> {
    return this.ghapi.tick(INT_SEC).flatMap((any) => this.ghapi.getTraffic(config , type));
  }



}
