import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IRelease } from 'app/models/irelease';

@Component({
  selector: 'app-releases',
  template: `
    <md-card style="margin:.5em;padding: 0px" *ngIf="config">
        <button md-raised-button class="view head">Releases</button>
    </md-card>
     <app-release-downloads [user]="config.user" [repo]="config.repo" *ngIf="config">
     </app-release-downloads>
  `,
})
export class ReleasesComponent {
  @Input()
  public config: { user, name, repo };
}
