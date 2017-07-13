import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GitHubService } from 'app/services/git-hub.service';
import { StatsService } from 'app/services/stats.service';
@Component({
  selector: 'app-git-hub',
  templateUrl: './git-hub.component.html',
  styleUrls: ['./git-hub.component.css']
})
export class GitHubComponent implements OnInit {

  public tabs = [
    {
      user: 'cognizantqahub', repo: 'Cognizant-Intelligent-Test-Scripter', name: 'CITS'
    },
    {
      user: 'cognizantqahub', repo: 'Cognizant-Intelligent-Test-Scripter-IE-Toolbar', name: 'IE-Toolbar'
    },
    {
      user: 'cognizantqahub', repo: 'Cognizant-Intelligent-Test-Scripter-Firefox-Addon', name: 'Firefox-Addon'
    }
  ];

  constructor(private router: Router, private route: ActivatedRoute,
    private ghapi: GitHubService, private stats: StatsService) {
    this.route.queryParams.map((params) => params['code'])
      .filter((code) => code && code !== '').subscribe(this.auth.bind(this));
  }
  ngOnInit() {
  }
  private auth(code: string) {
    if (!this.loggedIn()) {
      this.ghapi.auth(code).subscribe(this.done.bind(this));
    } else {
      this.done();
    }
  }
  public get user() {
    return this.ghapi.user();
  }
  public authorize() {
    this.ghapi.authorize();
  }
  public loggedIn(): boolean {
    return this.ghapi.loggedIn();
  }
  private done() {
  }
  public get timer() {
    return this.ghapi.timer;
  }
}
