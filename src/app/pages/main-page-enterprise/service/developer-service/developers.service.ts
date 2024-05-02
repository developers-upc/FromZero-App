import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IDeveloper} from "../../../../core/models/example.interface";

@Injectable({
  providedIn: 'root'
})
export class DevelopersService {
  baseUrl = 'http://localhost:3000/developers';

  constructor(private _http: HttpClient) { }


  getAll(): Observable<IDeveloper[]> {
    return this._http.get<IDeveloper[]>(this.baseUrl);
  }
}

