import {Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-candidates-project-dialog',
  templateUrl: './candidates-project-dialog.component.html',
  styleUrl: './candidates-project-dialog.component.css'
})
export class CandidatesProjectDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {candidates: any[]}) { }

}
