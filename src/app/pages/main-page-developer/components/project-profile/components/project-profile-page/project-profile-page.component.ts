import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AuthApiService} from "../../../../../auth/services/auth-api.service";
import {IEnterpriseProfileTemp} from "../../../../../main-page-enterprise/components/home/models/ienterprise-profile";

@Component({
  selector: 'app-project-profile-page',
  templateUrl: './project-profile-page.component.html',
  styleUrl: './project-profile-page.component.css'
})
export class ProjectProfilePageComponent implements OnInit{
  enterpriseProfile!: IEnterpriseProfileTemp;

  constructor(private route: ActivatedRoute, private _authapiservice: AuthApiService) {
  }

  ngOnInit(): void {
    let enterpriseId:number
    this.route.params.subscribe(params=>{
      enterpriseId= +params['enterpriseId'];
      this._authapiservice.getEnterpriseById(enterpriseId).subscribe(enterprise=>{
        this.enterpriseProfile=enterprise;
      })
    })
  }
}
