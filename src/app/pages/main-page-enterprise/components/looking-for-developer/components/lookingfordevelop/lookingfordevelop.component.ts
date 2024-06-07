import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
//import {Ishowproject} from "../../../../../../core/models/example.interface";
import {DevelopersService} from "../../../../service/developer-service/developers.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {IDeveloper} from "../../../developer-profile/model/ideveloper";


@Component({
  selector: 'app-main-page-developer',
  templateUrl: './lookingfordevelop.component.html',
  styleUrl: './lookingfordevelop.component.css'
})
export class LookingfordevelopComponent implements OnInit{

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
