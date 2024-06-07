import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-apply-confirmation',
  templateUrl: './apply-confirmation.component.html',
  styleUrl: './apply-confirmation.component.css'
})
export class ApplyConfirmationComponent {
  constructor(public dialogRef: MatDialogRef<ApplyConfirmationComponent>) {}

  closeDialog(){
    this.dialogRef.close();
  }
}
