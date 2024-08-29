import {Component, OnInit} from '@angular/core';
import {DevelopersService} from "../../../../service/developer-service/developers.service";
import {Router} from "@angular/router";
import {IDeveloperProfileTemp} from "../../../../../main-page-developer/components/home/models/ideveloper-profile";


@Component({
  selector: 'app-main-page-developer',
  templateUrl: './lookingfordevelop.component.html',
  styleUrl: './lookingfordevelop.component.css'
})
export class LookingfordevelopComponent implements OnInit{

  constructor(private router: Router,private _developersService: DevelopersService) {
  }
  developers!: IDeveloperProfileTemp[];

  ngOnInit(): void {
    this._developersService.getAllDevelopers().subscribe(developers=>{
      this.developers = developers;
    })
  }
  redirectToProfile(developerId:number){

    this.router.navigate(['/app/main/developer-profile', developerId]);
  }

}
