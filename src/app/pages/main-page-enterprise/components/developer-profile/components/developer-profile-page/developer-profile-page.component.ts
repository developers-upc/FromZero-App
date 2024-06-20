import {Component, OnInit} from '@angular/core';
//import {Ishowproject, IProject} from "../../../../../../core/models/example.interface";
import {ActivatedRoute} from "@angular/router";
import {DeveloperProfileApiService} from "../../service/developer-profile-api.service";
import {IDeveloper} from "../../model/ideveloper";
import {IDeveloperProject} from "../../model/ideveloper-project";
import {DevelopersService} from "../../../../service/developer-service/developers.service";
import {IDeveloperProfileTemp} from "../../../../../main-page-developer/components/home/models/ideveloper-profile";
//import {IProject} from "../../../home/models/iproject";

@Component({
  selector: 'app-developer-profile-page',
  templateUrl: './developer-profile-page.component.html',
  styleUrl: './developer-profile-page.component.css'
})
export class DeveloperProfilePageComponent implements OnInit{
  //developerProfile!: IDeveloper;
  developerProfile!:IDeveloperProfileTemp;
  developerRepository!: IDeveloperProject[];

  constructor(private route: ActivatedRoute, private developersService:DevelopersService) {
  }

  ngOnInit(): void {
    //const id = this.route.snapshot.paramMap.get('developerId');
    let id :number
    this.route.params.subscribe(params=>{
      id = +params['developerId']
      this.developersService.getDeveloperById(id).subscribe(developer=>{
        this.developerProfile=developer;
      })
    })

    /*console.log(id);
    if (id) {
      this._developerApi.getDeveloperById(+id).subscribe((developer: IDeveloper) => {
        this.developerProfile = developer;
        this.developerRepository = developer.repository;
        console.log(developer);
        console.log(developer.repository);
      });
    }*/
  }
}
