import { Component } from '@angular/core';
import {IDeveloperProject} from "../../model/ideveloper-project";
import {Ishowproject} from "../../model/ishowproject";
import {ActivatedRoute} from "@angular/router";
import {ProjectProfileApiService} from "../../service/project-profile-api.service";
import {IEnterpriseProfile} from "../../../../../main-page-enterprise/components/home/models/enterprise-profile.model";
import {AuthApiService} from "../../../../../auth/services/auth-api.service";

@Component({
  selector: 'app-project-profile-page',
  templateUrl: './project-profile-page.component.html',
  styleUrl: './project-profile-page.component.css'
})
export class ProjectProfilePageComponent {
  developerProfile!: Ishowproject;
  developerRepository!: IDeveloperProject[];
  enterpriseProfile!: IEnterpriseProfile;

  constructor(private route: ActivatedRoute, private _authapiservice: AuthApiService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('enterpriseId');
    console.log(id);
    if (id) {
      this._authapiservice.getProfileById(+id).subscribe((enterprise: IEnterpriseProfile) => {
        /*this.developerProfile = developer;
        this.developerRepository = developer.repository;
        console.log(developer);
        console.log(developer.repository);*/
        this.enterpriseProfile = enterprise;
      });
    }
  }


}
