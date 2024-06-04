import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DevelopersService} from "../../../../../main-page-enterprise/service/developer-service/developers.service";
import {IDeveloper} from "../../../../../main-page-enterprise/components/developer-profile/model/ideveloper";

@Component({
  selector: 'app-search-projects',
  templateUrl: './search-projects.component.html',
  styleUrl: './search-projects.component.css'
})
export class SearchProjectsComponent implements OnInit {

  constructor(private router: Router,private _developersService: DevelopersService) {
  }
  developers!: IDeveloper[];

  ngOnInit(): void {
    this._developersService.getAll().subscribe((developers: IDeveloper[]) => {
      this.developers = developers;
    });
  }
  redirectToProfile(developer: IDeveloper){
    localStorage.setItem('developerId', developer.id.toString());
    this.router.navigate(['/app/main/developer-profile', developer.id]);
  }

}
