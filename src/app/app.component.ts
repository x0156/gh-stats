import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input()
  public title = 'Gh-Stats!';
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

}
