import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IHighlightProject} from "../../model/ihighlight-project";

@Injectable({
  providedIn: 'root'
})
export class HighlightsProjectServiceService {
  baseUrl = 'http://localhost:8080/v1/api/highlight-projects';

  constructor(private _http:HttpClient) { }

  getAll(): Observable<IHighlightProject[]>{
    return this._http.get<IHighlightProject[]>(this.baseUrl);
  }
}
