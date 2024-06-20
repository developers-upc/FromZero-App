import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ICandidate} from "../../models/icandidate";
import {ProjectsApiService} from "../../services/projects-api.service";
//import {ICandidate} from "../../models/enterprise-profile.model";

@Component({
  selector: 'app-candidates-project-dialog',
  templateUrl: './candidates-project-dialog.component.html',
  styleUrl: './candidates-project-dialog.component.css'
})
export class CandidatesProjectDialogComponent {
  candidatesList!:ICandidate[];
  constructor(
    public dialogRef:MatDialogRef<CandidatesProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      projectId:number,
      candidates: ICandidate[] },
    private projectsService:ProjectsApiService) {
    this.candidatesList=this.data.candidates;

    /*this.candidatesList.forEach(candidate=>{
      candidate.rejected=false;
    })*/
  }

  acceptCandidate(developerId:number){
    this.projectsService.assignDeveloperToProject(this.data.projectId,developerId).subscribe(response=>{
      console.log(response)
      this.dialogRef.close();
    })
  }

  rejectCandidate(candidate:ICandidate){
    //candidate.rejected=true
    this.candidatesList.splice(this.candidatesList.indexOf(candidate),1);
  }

}
