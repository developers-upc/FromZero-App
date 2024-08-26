import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUserLogin} from "../model/iuser-login";
import {IEnterpriseRegister} from "../model/ienterprise-register";
import {IDeveloperRegister} from "../model/ideveloper-register";
import {BaseService} from "../../../core/services/shared/base.service";
import {IUserLoginV2} from "../model/iuser-login-v2";
import {ICompanyRegister} from "../model/icompany-register";

@Injectable({
  providedIn: 'root'
})
export class AuthApiService extends BaseService{
  baseUrl = '';

  constructor(private _http: HttpClient) {
    super();
    this.baseUrl = `${this.basePath}/auth/`;
  }

  createEnterpriseUser(mail: string, password: string, enterpriseName: string) {
    /*const user: IEnterpriseRegister = {
      mail: mail,
      password: password,
    }*/
    const user: ICompanyRegister={
      mail:mail,
      password:password,
      companyName:enterpriseName
    }
    //return this._http.post(this.baseUrl + 'register-enterprise', user);
    return this._http.post(this.baseUrl + 'register-company', user);
  }

  createDeveloperUser(mail: string, password: string, developerName: string, developerLastName: string) {
    const user: IDeveloperRegister = {
      email: mail,
      password: password,
      firstName: developerName,
      lastName: developerLastName
    }
    return this._http.post(this.baseUrl + 'register-developer', user);

  }

  validateUser(email: string, password: string) {
    const signInResource = { email, password };
    return this._http.post<IUserLoginV2>(this.baseUrl + 'sign-in', signInResource);
  }

  getUserByEmail(email:string){
    return this._http.get(this.baseUrl+'email/'+email);
  }
}
