import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IDeveloperProfileTemp} from "../../../main-page-developer/components/home/models/ideveloper-profile";

@Injectable({
  providedIn: 'root'
})
export class DevelopersService {
  developersUrl="http://localhost:8080/v1/api/profiles";

  constructor(private _http: HttpClient) { }

  getAllDevelopers(){
    return this._http.get<IDeveloperProfileTemp[]>(`${this.developersUrl}/developers`)
  }

  getDeveloperById(developerId:number){
    return this._http.get<IDeveloperProfileTemp>(`${this.developersUrl}/developers/${developerId}`)
  }

}

