import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IMessage} from "../model/imessage";

@Injectable({
  providedIn: 'root'
})
export class MessagesApiService {
  baseUrl="http://localhost:8080/v1/api/messages";
  constructor(private http:HttpClient) { }
  postMessage(message:any){
    return this.http.post<IMessage>(`${this.baseUrl}`,message);
  }
  getAllMessagesByRecipientId(id:number){
    return this.http.get<IMessage[]>(`${this.baseUrl}/recipient/${id}`);
  }
}
