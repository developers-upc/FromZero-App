import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IDeveloper} from "../model/ideveloper";

@Injectable({
  providedIn: 'root'
})
export class DeveloperProfileApiService {
  baseURL = 'http://localhost:3000/developers';
  constructor(private _http:HttpClient) { }

  getDeveloperById(id: number): Observable<IDeveloper>{
    return this._http.get<IDeveloper>(`${this.baseURL}/${id}`);
  }
}
