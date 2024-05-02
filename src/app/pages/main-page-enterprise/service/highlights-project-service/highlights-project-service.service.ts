import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IHighlightProject} from "../../../../core/models/example.interface";

@Injectable({
  providedIn: 'root'
})
export class HighlightsProjectServiceService {
  baseUrl = 'http://localhost:3000/highlights-projects';

  constructor(private _http:HttpClient) { }

  getAll(): Observable<IHighlightProject[]>{
    return this._http.get<IHighlightProject[]>(this.baseUrl);
  }
}
