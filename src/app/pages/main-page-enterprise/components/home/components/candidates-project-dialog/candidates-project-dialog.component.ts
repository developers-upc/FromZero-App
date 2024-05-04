import {Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {ICandidate} from "../../models/icandidate";
//import {ICandidate} from "../../models/enterprise-profile.model";

@Component({
  selector: 'app-candidates-project-dialog',
  templateUrl: './candidates-project-dialog.component.html',
  styleUrl: './candidates-project-dialog.component.css'
})
export class CandidatesProjectDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {candidates: ICandidate[]}) { }

}
