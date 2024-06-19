import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IdeliverableTemp} from "../model/ideliverableTemp";
import {IDeliverable} from "../model/ideliverable";

@Injectable({
  providedIn: 'root'
})
export class DeliverablesApiService {

  baseUrl="http://localhost:3000";
  delvUrl="http://localhost:8080/v1/api/deliverables"
  urlProject="/profiles/1/projects"
  delivs="/deliverables"

  constructor(private http: HttpClient) { }

  getAllDeliverables(profileId:number|null) {
    //return this.http.get(`${this.baseUrl}/profiles/${profileId}/projects/${projectId}${this.delivs}`)
    return this.http.get(`${this.baseUrl}/profiles/${profileId}`)
  }

  getAllDeliverablesByProjectId(projectId:number){
    return this.http.get<IDeliverable[]>(`${this.delvUrl}/project/${projectId}`);
  }

  postDeliverablePrev(deliverable: IdeliverableTemp, projectId?:number) {
    this.http.post(`${this.baseUrl}${this.urlProject}/${projectId}${this.delivs}`,deliverable)
  }

  postDeliverable(deliverable:any){
    return this.http.post(`${this.delvUrl}`,deliverable);
  }

}
