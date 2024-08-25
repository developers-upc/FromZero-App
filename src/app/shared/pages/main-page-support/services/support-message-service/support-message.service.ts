import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ISupportMessage} from "../../model/isupport-message";
import {BaseService} from "../../../../../core/services/shared/base.service";

@Injectable({
  providedIn: 'root'
})
export class SupportMessageService extends BaseService{
  url = '';
  constructor(private _http:HttpClient) {
    super();
    this.url = `${this.basePath}/support-tickets`
  }

  getAll(): Observable<ISupportMessage[]>{
    return this._http.get<ISupportMessage[]>(this.url);
  }

  postSupportTicket(supportTicket: any){
    return this._http.post<ISupportMessage>(this.url, supportTicket);
  }
}
