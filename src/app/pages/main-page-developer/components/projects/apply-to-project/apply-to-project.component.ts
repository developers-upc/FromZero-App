import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ApplyConfirmationComponent} from "../apply-confirmation/apply-confirmation.component";
import {Ishowproject} from "../../project-profile/model/ishowproject";
import {ShowProjectApiService} from "../../../service/show-project-service/show-project-api.service";
import {IEnterpriseProfile} from "../../../../main-page-enterprise/components/home/models/enterprise-profile.model";
import {ActivatedRoute} from "@angular/router";
import {ProjectsApiService} from "../../../../main-page-enterprise/components/home/services/projects-api.service";
import {IProject} from "../../../../main-page-enterprise/components/home/models/iproject";
import {IDeliverable} from "../../../../main-page-enterprise/components/deliverables/model/ideliverable";
import {
  DeliverablesApiService
} from "../../../../main-page-enterprise/components/deliverables/services/deliverables-api.service";

@Component({
  selector: 'app-apply-to-project',
  templateUrl: './apply-to-project.component.html',
  styleUrl: './apply-to-project.component.css'
})
export class ApplyToProjectComponent implements OnInit{
  //@Input() project!: Ishowproject;
  project!:IProject;
  methodologies!:IDeliverable[];

  constructor(private route: ActivatedRoute, public dialog: MatDialog,
              private projectsService:ProjectsApiService,private showProjectApi: ShowProjectApiService,
              private delvsService:DeliverablesApiService) {}

  openDialog(){
    this.dialog.open(ApplyConfirmationComponent, {})
  }

  ngOnInit(): void {
    //const id = this.route.snapshot.paramMap.get('id');
    let projectId:number;
    this.route.params.subscribe(params=>{
      projectId= +params['id'];
      this.projectsService.getProjectById(projectId).subscribe(project=>{
        this.project=project
      })
      this.delvsService.getAllDeliverablesByProjectId(projectId).subscribe(deliverables=>{
        this.methodologies=deliverables;
      })
    })
    /*if (id) {
      this.showProjectApi.getById(+id).subscribe((project) => {

        this.project = project;
      });
    }*/
  }

}
