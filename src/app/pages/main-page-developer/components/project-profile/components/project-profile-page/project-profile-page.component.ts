import {Component, OnInit} from '@angular/core';
import {IDeveloperProject} from "../../model/ideveloper-project";
import {Ishowproject} from "../../model/ishowproject";
import {ActivatedRoute} from "@angular/router";
import {ProjectProfileApiService} from "../../service/project-profile-api.service";
import {IEnterpriseProfile} from "../../../../../main-page-enterprise/components/home/models/enterprise-profile.model";
import {AuthApiService} from "../../../../../auth/services/auth-api.service";
import {IEnterpriseProfileTemp} from "../../../../../main-page-enterprise/components/home/models/ienterprise-profile";

@Component({
  selector: 'app-project-profile-page',
  templateUrl: './project-profile-page.component.html',
  styleUrl: './project-profile-page.component.css'
})
export class ProjectProfilePageComponent implements OnInit{
  developerProfile!: Ishowproject;
  developerRepository!: IDeveloperProject[];
  enterpriseProfile!: IEnterpriseProfileTemp;

  constructor(private route: ActivatedRoute, private _authapiservice: AuthApiService) {
  }

  ngOnInit(): void {
    //const id = this.route.snapshot.paramMap.get('enterpriseId');
    let enterpriseId:number
    this.route.params.subscribe(params=>{
      enterpriseId= +params['enterpriseId'];
      this._authapiservice.getEnterpriseById(enterpriseId).subscribe(enterprise=>{
        this.enterpriseProfile=enterprise;
      })
    })
    /*console.log(id);
    if (id) {
      this._authapiservice.getProfileById(+id).subscribe((enterprise: IEnterpriseProfile) => {
        /!*this.developerProfile = developer;
        this.developerRepository = developer.repository;
        console.log(developer);
        console.log(developer.repository);*!/
        this.enterpriseProfile = enterprise;
      });
    }*/
  }


}
