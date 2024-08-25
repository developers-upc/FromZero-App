import { Component } from '@angular/core';
import {IDeveloperProfileTemp} from "../../models/ideveloper-profile";
import {IProject} from "../../../../../main-page-enterprise/components/home/models/iproject";
import {AuthApiService} from "../../../../../auth/services/auth-api.service";
import {ProjectsApiService} from "../../../../../main-page-enterprise/components/home/services/projects-api.service";
import {ProfileService} from "../../../../../../core/services/profiles/profile.service";

@Component({
  selector: 'app-home-page-developer',
  templateUrl: './home-page-developer.component.html',
  styleUrl: './home-page-developer.component.css'
})
export class HomePageDeveloperComponent {
  perfilUsuario!: IDeveloperProfileTemp;

  userProjects!:IProject[];

  constructor(
    private _authService: AuthApiService,
    private _projectsService:ProjectsApiService,
    private _profileService:ProfileService) {
  }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this._profileService.getDeveloperProfileById(+userId).subscribe(profile => {
        this.perfilUsuario = profile;
        localStorage.setItem('developerId', profile.id.toString());
      });
      this._projectsService.getProjectsByDeveloperUserId(+userId).subscribe(projects=>{
        this.userProjects=projects
      })
    }
  }
}
