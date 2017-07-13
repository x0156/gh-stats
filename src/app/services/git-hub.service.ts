import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { MdSnackBar } from '@angular/material';

const C_ID = '197c45ce7f08b6f6a93e';
const INT_SEC = 300;
@Injectable()
export class GitHubService {

  private _token = localStorage.getItem('token');
  set token(t) {
    this._token = t;
    localStorage.setItem('token', t);
  }
  get token() {
    return this._token;
  }
  private _user: any = {};
  private gh: GitHub;
  public timer = 100;
  constructor(private http: Http, private snackBar: MdSnackBar) {
    if (this._token && this._token.length > 0) {
      this.gh = new GitHub(this._token);
      this.init(this.gh).subscribe(() => { }, () => {
        this.token = '';
      });
    }
  }

  public auth(code: string): Observable<any> {
    return this.http.get(`https://gh-gk-auth.herokuapp.com/authenticate/${code}`)
      .map(res => res.json().token).flatMap((token) => {
        if (token) {
          this.token = token;
          this.gh = new GitHub(token);
          return this.init(this.gh);
        } else {
          return Observable.of(false);
        }
      });
  }
  private init(gh: GitHub) {
    return this.http.get(this.gh.user).map(res => res.json())
      .do((user) => {
        this._user = user;
        this.snackBar.open('Logged In!', '', {
          duration: 1000
        });
        this.tick().subscribe((any) => {
          this.timer = (100 - ((any + 1) % this.interval) * 100 / this.interval);
        });
      });
  }
  public authorize(): void {
    window.location.href = `http://github.com/login/oauth/authorize?client_id=${C_ID}&&scope=public_repo`;
  }
  public loggedIn(): boolean {
    return this.token && this.token.length > 0;
  }
  public user(): any {
    return this._user;
  }
  public getTraffic(config, type) {
    return this.http.get(this.gh.traffic(config.user, config.repo, type)).map(res => res.json());
  }
  public getReleases(config) {
    return this.http.get(this.gh.release(config.user, config.repo)).map(res => res.json());
  }

  public tick(interval: number = 1): Observable<number> {
    return Observable.merge(Observable.of(0), Observable.interval(interval * 1000).map((t) => t + 1));
  }

  public get interval(): number {
    return INT_SEC;
  }
}
class GitHub {

  constructor(private token: string) {
  }
  public get user() {
    return auth(git_api() + '/user', this.token);
  }
  public traffic(user, repo, type = 'views') {
    return auth(git_api() + `/repos/${user}/${repo}/traffic/${type}`, this.token);
  }
  public release(user, repo) {
    return auth(git_api() + `/repos/${user}/${repo}/releases`, this.token);
  }

}

function auth(url, token) {
  return `${url}?access_token=${token}&token_type=bearer`
}

function git_api() {
  return 'https://api.github.com'
}

