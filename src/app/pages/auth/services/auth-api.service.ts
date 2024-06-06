import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
//import {IUserLogin} from "../../../core/models/example.interface";
import {IEnterpriseProfile} from "../../main-page-enterprise/components/home/models/enterprise-profile.model";
import {IUserLogin} from "../model/iuser-login";
import {IProfile} from "../model/iprofile";
import {IEnterpriseRegister} from "../model/ienterprise-register";


@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  baseUrl = 'http://localhost:8080/v1/api/auth/';

  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get(`${this.baseUrl}users`);
  }

  // createUser(username:string,password:string,email:string,accountType:number){
  //   let id:number=0;
  //   this.getAll().subscribe((response:any)=>{
  //     id = response.length+1;
  //     const user:IUserRegister={
  //       email:email,
  //       password:password,
  //       username:username,
  //       accountType:accountType,
  //       id:id
  //     }
  //     //console.log(user)
  //     this._http.post(`${this.baseUrl}users`,user).subscribe(response=>{
  //       console.log(response)
  //     })
  //   })
  // }

  createEnterpriseUser(email: string, password: string, enterpriseName: string) {
    let id: number = 0;
    this.getAll().subscribe((response: any) => {
      const user: IEnterpriseRegister = {
        email: email,
        password: password,
        enterpriseName: enterpriseName
      }
      this._http.post(this.baseUrl + 'register-enterprise', user).subscribe(response => {
        console.log(response)
      })
    })
  }

  validateUser(email: string, password: string): Observable<IUserLogin> {
    const signInResource = { email, password };
    return this._http.post<IUserLogin>(this.baseUrl + 'sign-in', signInResource);
  }

  getProfileById(id: number): Observable<IEnterpriseProfile> {
    return this._http.get<IEnterpriseProfile>(this.baseUrl + 'profiles/' + id);
  }
}
