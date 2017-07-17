import { Component, NgModule, Input, ChangeDetectionStrategy } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

function toSeries(name: string, value: number) {
    return { name, value };
}
function toDateLabel(ts: string) {
    return new Date(ts).toDateString().split(/ \d{4}/)[0];
}
interface IView {
    timestamp: string, count: number, uniques: number
}

@Component({
    selector: 'app-chart-ngx-bar',

    template: `
    <ngx-charts-bar-vertical-2d
      [scheme]="colorScheme"
      [results]="data"
      [xAxis]="true"
      [yAxis]="true"
      [xAxisLabel]="'Time'"
      [yAxisLabel]="'Count'"
      [roundEdges]="false"
      [groupPadding]="4"
      [barPadding]="8">
    </ngx-charts-bar-vertical-2d>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgXBarComponent {
    @Input()
    public set ds(ds: IView[]) {
        this.data = ds.map((e: IView) => {
            const name = toDateLabel(e.timestamp);
            const series = [
                toSeries('Count', e.count),
                toSeries('Uniques', e.uniques)
            ]
            return { name, series };
        });
    }
    @Input()
    public colors: string[] = ['#673ab7', '#607d8b'];


    public data: any[];

    public get colorScheme() {
        return { domain: this.colors };
    };

    public log(evt) {
        console.log(evt);
    }
}

