import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'

import { IRelease } from 'app/models/irelease';
const INT_SEC = 300;
@Injectable()
export class ReleaseStatsService {


  private auth = '';


  constructor(private http: Http) { }

  public getReleases(userName: string, repo: string): Observable<IRelease[]> {
    return this.tick(INT_SEC)
      .flatMap((any) => this.http.get(`https://api.github.com/repos/${userName}/${repo}/releases?${this.auth}`)
        .map((res) => res.json() as IRelease[]));
  }

  public tick(interval: number = 1): Observable<number> {
    return Observable.merge(Observable.of(0), Observable.interval(interval * 1000).map((t) => t + 1));
  }

  public get interval(): number {
    return INT_SEC;
  }


}
