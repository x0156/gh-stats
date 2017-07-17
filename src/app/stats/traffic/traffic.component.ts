import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { StatsService } from 'app/services/stats.service';
@Component({
  selector: 'app-traffic',
  templateUrl: './traffic.component.html',
  styleUrls: ['./traffic.component.css']
})
export class TrafficComponent implements OnInit {

  @Input()
  private config;
  public clone;
  public view;
  public timer = 30;

  constructor(private stats: StatsService) {

  }

  ngOnInit() {
    this.stats.getTraffic(this.config, 'clones')
      .subscribe((data) => this.clone = data);
    this.stats.getTraffic(this.config, 'views')
      .subscribe((data) => this.view = data);
  }
  public stringify(object: any): string {
    if (object) {
      return JSON.stringify(object);
    } else {
      return '!';
    }
  }

}
