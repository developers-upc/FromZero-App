import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
//import {IUserLogin} from "../../../core/models/example.interface";
import {IEnterpriseProfile} from "../../main-page-enterprise/components/home/models/enterprise-profile.model";
import {IUserLogin} from "../model/iuser-login";


@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  baseUrl = 'http://localhost:3000/';

  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get(this.baseUrl);
  }

  validateUser(username: string, password: string): Observable<IUserLogin | undefined> {
    return this._http.get<IUserLogin[]>(this.baseUrl + 'users/').pipe(
      map((users: IUserLogin[]) => {
        return users.find((user:IUserLogin) => user.username === username && user.password === password);
      })
    );
  }

  getProfileById(id: number): Observable<IEnterpriseProfile> {
    return this._http.get<IEnterpriseProfile>(this.baseUrl + 'profiles/' + id);
  }
}
