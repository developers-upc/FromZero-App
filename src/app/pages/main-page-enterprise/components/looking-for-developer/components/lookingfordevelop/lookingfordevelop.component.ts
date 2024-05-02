import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {IDeveloper} from "../../../../../../core/models/example.interface";
import {DevelopersService} from "../../../../service/developer-service/developers.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-lookingfordevelop',
  templateUrl: './lookingfordevelop.component.html',
  styleUrl: './lookingfordevelop.component.css'
})
export class LookingfordevelopComponent implements OnInit{

  constructor(private _developersService: DevelopersService) {
  }
  developers!: IDeveloper[];

  ngOnInit(): void {
    this._developersService.getAll().subscribe((developers: IDeveloper[]) => {
      this.developers = developers;
    });
  }


}
