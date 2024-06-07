import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ApplyConfirmationComponent} from "../apply-confirmation/apply-confirmation.component";
import {Ishowproject} from "../../project-profile/model/ishowproject";
import {ShowProjectApiService} from "../../../service/show-project-service/show-project-api.service";
import {IEnterpriseProfile} from "../../../../main-page-enterprise/components/home/models/enterprise-profile.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-apply-to-project',
  templateUrl: './apply-to-project.component.html',
  styleUrl: './apply-to-project.component.css'
})
export class ApplyToProjectComponent implements OnInit{
  @Input() project!: Ishowproject;

  constructor(private route: ActivatedRoute, public dialog: MatDialog, private showProjectApi: ShowProjectApiService) {}

  openDialog(){
    this.dialog.open(ApplyConfirmationComponent, {})
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.showProjectApi.getById(+id).subscribe((project) => {

        this.project = project;
      });
    }
  }

}
