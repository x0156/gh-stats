import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
  ]
}
