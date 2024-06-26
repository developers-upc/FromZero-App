import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ISupportMessage} from "../../model/isupport-message";

@Injectable({
  providedIn: 'root'
})
export class SupportMessageService {
  baseUrl = 'http://localhost:8080/v1/api/support-tickets';
  constructor(private _http:HttpClient) { }

  getAll(): Observable<ISupportMessage[]>{
    return this._http.get<ISupportMessage[]>(this.baseUrl);
  }
}
