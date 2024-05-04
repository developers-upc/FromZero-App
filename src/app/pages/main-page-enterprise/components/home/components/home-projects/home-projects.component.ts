import {Component, Input} from '@angular/core';
import {IEnterpriseProfile} from "../../models/enterprise-profile.model";
import {MatDialog} from "@angular/material/dialog";
import {CandidatesProjectDialogComponent} from "../candidates-project-dialog/candidates-project-dialog.component";
import {IProject} from "../../models/iproject";

@Component({
  selector: 'app-home-projects',
  templateUrl: './home-projects.component.html',
  styleUrl: './home-projects.component.css'
})
export class HomeProjectsComponent {
  emptyProjects = new Array(5);
  @Input() perfilUsuarioProjects!: IProject[];

  constructor(public dialog: MatDialog) {
    console.log(this.perfilUsuarioProjects)
  }

  openDialog(project: IProject) {
    this.dialog.open(CandidatesProjectDialogComponent, {
      data: {
        candidates: project.candidates
      }
    });
  }

  goToDeliverables(projectId:number){
    return ['/app','main',projectId,'deliverables']
  }
}
