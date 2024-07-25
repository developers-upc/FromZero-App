import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IDeveloperProject} from "../../model/ideveloper-project";
import {DevelopersService} from "../../../../service/developer-service/developers.service";
import {IDeveloperProfileTemp} from "../../../../../main-page-developer/components/home/models/ideveloper-profile";

@Component({
  selector: 'app-developer-profile-page',
  templateUrl: './developer-profile-page.component.html',
  styleUrl: './developer-profile-page.component.css'
})
export class DeveloperProfilePageComponent implements OnInit{
  developerProfile!:IDeveloperProfileTemp;
  developerRepository!: IDeveloperProject[];

  constructor(private route: ActivatedRoute, private developersService:DevelopersService) {
  }

  ngOnInit(): void {
    let id :number
    this.route.params.subscribe(params=>{
      id = +params['developerId']
      this.developersService.getDeveloperById(id).subscribe(developer=>{
        this.developerProfile=developer;
      })
    })
  }
}
