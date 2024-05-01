import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-accept-deliverable',
  templateUrl: './dialog-accept-deliverable.component.html',
  styleUrl: './dialog-accept-deliverable.component.css'
})
export class DialogAcceptDeliverableComponent {
  constructor(public dialogRef:MatDialogRef<DialogAcceptDeliverableComponent>) {
  }

  closeDialog(){
    this.dialogRef.close();
  }
}
