import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DevelopersService} from "../../../../../main-page-enterprise/service/developer-service/developers.service";
import {IDeveloper} from "../../../../../main-page-enterprise/components/developer-profile/model/ideveloper";
import {Ishowproject} from "../../../project-profile/model/ishowproject";
import {ShowProjectApiService} from "../../../../service/show-project-service/show-project-api.service";

@Component({
  selector: 'app-search-projects',
  templateUrl: './search-projects.component.html',
  styleUrl: './search-projects.component.css'
})
export class SearchProjectsComponent implements OnInit {

  constructor(private router: Router,private _projectservice: ShowProjectApiService) {
  }
  projects!: Ishowproject[];

  ngOnInit(): void {
    /*this._projectservice.getAll("En busqueda").subscribe((projects: Ishowproject[]) => {
      this.projects = projects;
    })*/
    this._projectservice.showProjects().subscribe((projects: Ishowproject[]) => {
      this.projects = projects;
    })

  }
  /*redirectToProfile(developer: IDeveloper){
    //localStorage.setItem('developerId', developer.id.toString());
    this.router.navigate(['/app/main/developer-profile', developer.id]);
  }*/

  redirectToProfile(ownerid: number): void {
    //localStorage.setItem('developerId', developer.id.toString());
    localStorage.setItem('enterpriseId', ownerid.toString());
    this.router.navigate(['/app-developer/main/enterprise-profile', ownerid]);
  }

}
