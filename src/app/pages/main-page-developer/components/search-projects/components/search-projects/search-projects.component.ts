import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DevelopersService} from "../../../../../main-page-enterprise/service/developer-service/developers.service";
import {IDeveloper} from "../../../../../main-page-enterprise/components/developer-profile/model/ideveloper";
import {Ishowproject} from "../../../project-profile/model/ishowproject";
import {ShowProjectApiService} from "../../../../service/show-project-service/show-project-api.service";
import {ProjectsApiService} from "../../../../../main-page-enterprise/components/home/services/projects-api.service";
import {IProject} from "../../../../../main-page-enterprise/components/home/models/iproject";
import {AuthApiService} from "../../../../../auth/services/auth-api.service";

@Component({
  selector: 'app-search-projects',
  templateUrl: './search-projects.component.html',
  styleUrl: './search-projects.component.css'
})
export class SearchProjectsComponent implements OnInit {

  constructor(private router: Router,private projectsService:ProjectsApiService,
              private _projectservice: ShowProjectApiService,private authService: AuthApiService) {
  }
  //projects!: Ishowproject[];
  projects!:IProject[];
  //enterpriseName!:string;

  ngOnInit(): void {
    /*this._projectservice.getAll("En busqueda").subscribe((projects: Ishowproject[]) => {
      this.projects = projects;
    })*/
    this.projectsService.getProjectsByState("En busqueda").subscribe(projects=>{
      this.projects=projects
    })
    /*this._projectservice.showProjects().subscribe((projects: Ishowproject[]) => {
      this.projects = projects;
    })*/

  }
  /*redirectToProfile(developer: IDeveloper){
    //localStorage.setItem('developerId', developer.id.toString());
    this.router.navigate(['/app/main/developer-profile', developer.id]);
  }*/

  redirectToProfile(ownerId: number): void {
    //localStorage.setItem('developerId', developer.id.toString());
    //localStorage.setItem('enterpriseId', ownerid.toString());
    this.router.navigate(['/app-developer/main/enterprise-profile', ownerId]);
  }

  goToProject(id: number): void {
    //localStorage.setItem('id', id.toString());
    this.router.navigate(['/app-developer/main//apply-to-project', id]);
  }

}
