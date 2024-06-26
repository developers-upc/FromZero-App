import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ishowproject} from "../model/ishowproject";
import {IdeliverableTemp} from "../../../../main-page-enterprise/components/deliverables/model/ideliverableTemp";

@Injectable({
  providedIn: 'root'
})
export class ProjectProfileApiService {
  baseURL = 'http://localhost:3000/projects';
  constructor(private _http:HttpClient) { }
  getDeveloperById(id: number): Observable<Ishowproject>{
    return this._http.get<Ishowproject>(`${this.baseURL}/${id}`);
  }
}
