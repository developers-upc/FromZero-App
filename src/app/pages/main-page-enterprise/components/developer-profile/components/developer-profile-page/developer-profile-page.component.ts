import {Component, OnInit} from '@angular/core';
//import {IDeveloper, IProject} from "../../../../../../core/models/example.interface";
import {ActivatedRoute} from "@angular/router";
import {DeveloperProfileApiService} from "../../service/developer-profile-api.service";
import {IDeveloper} from "../../model/ideveloper";
import {IDeveloperProject} from "../../model/ideveloper-project";
//import {IProject} from "../../../home/models/iproject";

@Component({
  selector: 'app-developer-profile-page',
  templateUrl: './developer-profile-page.component.html',
  styleUrl: './developer-profile-page.component.css'
})
export class DeveloperProfilePageComponent implements OnInit{
  developerProfile!: IDeveloper;
  developerRepository!: IDeveloperProject[];

  constructor(private route: ActivatedRoute, private _developerApi: DeveloperProfileApiService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('developerId');
    console.log(id);
    if (id) {
      this._developerApi.getDeveloperById(+id).subscribe((developer: IDeveloper) => {
        this.developerProfile = developer;
        this.developerRepository = developer.repository;
        console.log(developer);
        console.log(developer.repository);
      });
    }
  }
}
