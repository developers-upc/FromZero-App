import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
//import {Ishowproject} from "../../../../../../core/models/example.interface";
import {DevelopersService} from "../../../../service/developer-service/developers.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
//import {IDeveloper} from "../../../developer-profile/model/ideveloper";
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
    /*this._developersService.getAll().subscribe((developers: IDeveloper[]) => {
      this.developers = developers;
    });*/
    this._developersService.getAllDevelopers().subscribe(developers=>{
      this.developers = developers;
    })
  }
  redirectToProfile(developerId:number){
    //localStorage.setItem('developerId', developer.id.toString());

    this.router.navigate(['/app/main/developer-profile', developerId]);
  }

}
