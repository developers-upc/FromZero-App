import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IDeveloperProfileTemp} from "../../../main-page-developer/components/home/models/ideveloper-profile";
import {BaseService} from "../../../../core/services/shared/base.service";

@Injectable({
  providedIn: 'root'
})
export class DevelopersService extends BaseService{
  url="";

  constructor(private _http: HttpClient) {
    super();
    this.url = `${this.basePath}/profiles`
  }

  getAllDevelopers(){
    return this._http.get<IDeveloperProfileTemp[]>(`${this.url}/developers`)
  }

  getDeveloperById(developerId:number){
    return this._http.get<IDeveloperProfileTemp>(`${this.url}/developer/profile/${developerId}`)
  }

}

