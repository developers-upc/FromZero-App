import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Ishowproject} from "../../components/project-profile/model/ishowproject";

@Injectable({
  providedIn: 'root'
})
export class ShowProjectApiService {
  baseUrl = 'http://localhost:8080/v1/api/projects/by-state';

  constructor(private _http: HttpClient) { }

  getAll(state: string) {
    let params = new HttpParams().set('state', state);
    return this._http.get<Ishowproject[]>(this.baseUrl,{params});
  }

}
