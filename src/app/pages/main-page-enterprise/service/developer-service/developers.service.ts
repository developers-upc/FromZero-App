import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IDeveloper} from "../../components/developer-profile/model/ideveloper";
import {IDeveloperProfileTemp} from "../../../main-page-developer/components/home/models/ideveloper-profile";
//import {Ishowproject} from "../../../../core/models/example.interface";

@Injectable({
  providedIn: 'root'
})
export class DevelopersService {
  baseUrl = 'http://localhost:3000/developers';
  developersUrl="http://localhost:8080/v1/api/profiles";

  constructor(private _http: HttpClient) { }


  getAll(): Observable<IDeveloper[]> {
    return this._http.get<IDeveloper[]>(this.baseUrl);
  }

  getAllDevelopers(){
    return this._http.get<IDeveloperProfileTemp[]>(`${this.developersUrl}/developers`)
  }

  getDeveloperById(developerId:number){
    return this._http.get<IDeveloperProfileTemp>(`${this.developersUrl}/developers/${developerId}`)
  }

}

