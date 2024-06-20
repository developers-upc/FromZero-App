import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {IProject} from "../models/iproject";

@Injectable({
  providedIn: 'root'
})
export class ProjectsApiService {
  baseUrl = "http://localhost:8080/v1/api/projects";
  constructor(private http:HttpClient) { }
  getAllProjectsByEnterpriseUserId(id:number){
    return this.http.get<IProject[]>(`${this.baseUrl}/enterprise/${id}`)
  }
  getProjectsByDeveloperUserId(id:number){
    return this.http.get<IProject[]>(`${this.baseUrl}/developer/${id}`);
  }
  postProject(project:any){
    return this.http.post<IProject>(`${this.baseUrl}`,project)
  }
  assignDeveloperToProject(projectId:number,developerUserId:number){
    return this.http.patch(`${this.baseUrl}/${projectId}/assign-developer`,developerUserId)
  }
  getProjectsByState(state:string){
    let params = new HttpParams().set('state', state);
    return this.http.get<IProject[]>(`${this.baseUrl}/by-state`,{params})
  }
  getProjectById(id:number){
    return this.http.get<IProject>(`${this.baseUrl}/${id}`);
  }
}
