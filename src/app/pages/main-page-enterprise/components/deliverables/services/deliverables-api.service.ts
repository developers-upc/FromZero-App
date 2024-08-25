import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
//import {IdeliverableTemp} from "../model/ideliverableTemp";
import {IDeliverable} from "../model/ideliverable";
import {BaseService} from "../../../../../core/services/shared/base.service";

@Injectable({
  providedIn: 'root'
})
export class DeliverablesApiService extends BaseService{

  //baseUrl="http://localhost:3000";
  url=""
  /*urlProject="/profiles/1/projects"
  delivs="/deliverables"*/

  constructor(private http: HttpClient) {
    super();
    this.url =`${this.basePath}/deliverables`
  }

  getAllDeliverablesByProjectId(projectId:number){
    return this.http.get<IDeliverable[]>(`${this.url}/project/${projectId}`);
  }

  /*postDeliverablePrev(deliverable: IdeliverableTemp, projectId?:number) {
    this.http.post(`${this.baseUrl}${this.urlProject}/${projectId}${this.delivs}`,deliverable)
  }*/

  postDeliverable(deliverable:any){
    return this.http.post(`${this.url}`,deliverable);
  }

  getDeliverableById(deliverableId:number){
    return this.http.get<IDeliverable>(`${this.url}/${deliverableId}`);
  }

  sendDeliverable(deliverableId:number,developerMessage:string){
    return this.http.patch(`${this.url}/${deliverableId}/send`,developerMessage);
  }

  reviewDeliverable(deliverableId:number,accept:boolean){
    return this.http.patch(`${this.url}/${deliverableId}/review`,accept)
  }
}
