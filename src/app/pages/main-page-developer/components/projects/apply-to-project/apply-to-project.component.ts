import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ApplyConfirmationComponent} from "../apply-confirmation/apply-confirmation.component";

@Component({
  selector: 'app-apply-to-project',
  templateUrl: './apply-to-project.component.html',
  styleUrl: './apply-to-project.component.css'
})
export class ApplyToProjectComponent {
    constructor(public dialog: MatDialog) {}

    openDialog(){
      this.dialog.open(ApplyConfirmationComponent, {})
    }
}
