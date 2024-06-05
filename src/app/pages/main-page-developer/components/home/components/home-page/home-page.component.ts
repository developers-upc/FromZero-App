import {Component, OnInit} from '@angular/core';
import {IEnterpriseProfile} from "../../../../../main-page-enterprise/components/home/models/enterprise-profile.model";
import {IDeveloperProfile} from "../../models/developer-profile.model";
import {AuthApiService} from "../../../../../auth/services/auth-api.service";
import {IProject} from "../../../../../main-page-enterprise/components/home/models/iproject";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  perfilUsuario!: IDeveloperProfile;
  userProjects!: IProject[];
  constructor(private _authService: AuthApiService) {

  }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this._authService.getDeveloperProfileById(+userId).subscribe(profile => {
        this.perfilUsuario = profile;
        //this.userProjects = profile.projects;
      });
    }
  }

}
