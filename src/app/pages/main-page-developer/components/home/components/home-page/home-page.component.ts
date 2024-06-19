import {Component, OnInit} from '@angular/core';
import {AuthApiService} from "../../../../../auth/services/auth-api.service";
import {IProject} from "../../../../../main-page-enterprise/components/home/models/iproject";
import {IDeveloperProfileTemp} from "../../models/ideveloper-profile";
import {ProjectsApiService} from "../../../../../main-page-enterprise/components/home/services/projects-api.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  perfilUsuario!: IDeveloperProfileTemp;

  userProjects!:IProject[];

  constructor(private _authService: AuthApiService,private _projectsService:ProjectsApiService) {
  }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this._authService.getDeveloperProfileById(+userId).subscribe(profile => {
        this.perfilUsuario = profile;
      });
      this._projectsService.getProjectsByDeveloperUserId(+userId).subscribe(projects=>{
        this.userProjects=projects
      })
    }
  }

}
