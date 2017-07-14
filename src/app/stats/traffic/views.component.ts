import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IRelease } from 'app/models/irelease';

@Component({
  selector: 'app-traffic-views',
  templateUrl: './views.component.html',
})
export class ViewsComponent implements OnInit {

  @Input()
  public set data(ds: IView[]) {
    if (ds) {
      const labels = [];
      const count = [];
      const unique = [];
      ds.forEach((e) => {
        labels.push(new Date(e.timestamp).toDateString().split(/ \d{4}/)[0]);
        count.push(e.count);
        unique.push(e.uniques);
      });
      this.barChartLabels = [...labels];
      this.barChartData = [
        { data: [...count], label: 'Count' },
        { data: [...unique], label: 'Uniques' }
      ]
    }
  };
  @Input()
  public count;
  @Input()
  public uniques;

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[];
  public barChartType = 'bar';
  public barChartLegend = false;

  public barChartData: any[];

  constructor() {
  }
  ngOnInit() {

  }
}

interface IView {
  timestamp: string, count: number, uniques: number
}
