import {Component, Inject} from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-repos-dialog',
  templateUrl: 'repos-dialog.component.html',
})
export class ReposDialogComponent {

  constructor(
    public dialogRef: MdDialogRef<ReposDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
