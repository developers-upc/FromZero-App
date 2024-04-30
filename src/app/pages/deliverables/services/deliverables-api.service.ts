import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Deliverable} from "../model/deliverable.entity";

@Injectable({
  providedIn: 'root'
})
export class DeliverablesApiService {

  baseUrl="http://localhost:3000";
  urlProject="/enterprises/1/projects"
  delivs="/deliverables"

  constructor(private http: HttpClient) { }

  getAllDeliverables(projectId?: number) {
    return this.http.get(`${this.baseUrl}${this.urlProject}/${projectId}${this.delivs}`)
  }

  postDeliverable(deliverable: Deliverable,projectId?:number) {
    this.http.post(`${this.baseUrl}${this.urlProject}/${projectId}${this.delivs}`,deliverable)
  }

}
