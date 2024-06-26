import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
//import {IUserLogin} from "../../../core/models/example.interface";
import {IEnterpriseProfile} from "../../main-page-enterprise/components/home/models/enterprise-profile.model";
import {IUserLogin} from "../model/iuser-login";
import {IProfile} from "../model/iprofile";
import {IDeveloperProfile} from "../../main-page-developer/components/home/models/developer-profile.model";
import {IEnterpriseRegister} from "../model/ienterprise-register";
import {IDeveloperRegister} from "../model/ideveloper-register";
import {IEnterpriseProfileTemp} from "../../main-page-enterprise/components/home/models/ienterprise-profile";
import {IDeveloperProfileTemp} from "../../main-page-developer/components/home/models/ideveloper-profile";

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  baseUrl = 'http://localhost:8080/v1/api/auth/';
  profilesUrl="http://localhost:8080/v1/api/profiles/";

  constructor(private _http: HttpClient) { }

  createEnterpriseUser(mail: string, password: string, enterpriseName: string) {
    const user: IEnterpriseRegister = {
      mail: mail,
      password: password,
      enterpriseName: enterpriseName
    }
    return this._http.post(this.baseUrl + 'register-enterprise', user);
  }

  createDeveloperUser(mail: string, password: string, developerName: string, developerLastName: string) {
    const user: IDeveloperRegister = {
      mail: mail,
      password: password,
      firstName: developerName,
      lastName: developerLastName
    }
    return this._http.post(this.baseUrl + 'register-developer', user);

  }

  validateUser(email: string, password: string): Observable<IUserLogin> {
    const signInResource = { email, password };
    return this._http.post<IUserLogin>(this.baseUrl + 'sign-in', signInResource);
  }

  getProfileById(id: number): Observable<IEnterpriseProfile> {
    //return this._http.get<IEnterpriseProfile>(this.baseUrl + 'profiles/' + id);
    return this._http.get<IEnterpriseProfile>(this.profilesUrl+'enterprises/'+id);
  }

  getEnterpriseProfileById(id: number): Observable<IEnterpriseProfileTemp> {
    //return this._http.get<IEnterpriseProfile>(this.baseUrl + 'profiles/' + id);
    return this._http.get<IEnterpriseProfileTemp>(this.profilesUrl+'enterprises/'+id);
  }

  getDeveloperProfileById(id: number): Observable<IDeveloperProfileTemp> {
    return this._http.get<IDeveloperProfileTemp>(this.profilesUrl + 'developers/' + id);
  }
  getEnterpriseById(id:number){
    return this._http.get<IEnterpriseProfileTemp>(this.profilesUrl+'enterprise/'+id);
  }

  getUserByEmail(email:string){
    return this._http.get(this.baseUrl+'email/'+email);
  }

  updateDeveloperProfile(id: number, updateDeveloper: any): Observable<any>{
    const url = this.profilesUrl + 'developers/' + id;
    return this._http.put(url, updateDeveloper);
  }
}
