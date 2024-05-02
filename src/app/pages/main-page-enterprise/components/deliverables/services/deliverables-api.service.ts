import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IDeliverable} from "../model/ideliverable";

@Injectable({
  providedIn: 'root'
})
export class DeliverablesApiService {

  baseUrl="http://localhost:3000";
  urlProject="/profiles/1/projects"
  delivs="/deliverables"

  constructor(private http: HttpClient) { }

  getAllDeliverables(profileId:number|null) {
    //return this.http.get(`${this.baseUrl}/profiles/${profileId}/projects/${projectId}${this.delivs}`)
    return this.http.get(`${this.baseUrl}/profiles/${profileId}`)
  }

  postDeliverable(deliverable: IDeliverable,projectId?:number) {
    this.http.post(`${this.baseUrl}${this.urlProject}/${projectId}${this.delivs}`,deliverable)
  }

}
