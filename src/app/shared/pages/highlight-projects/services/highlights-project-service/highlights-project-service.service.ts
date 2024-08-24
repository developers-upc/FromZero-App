import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IHighlightProject} from "../../model/ihighlight-project";
import {BaseService} from "../../../../../core/services/shared/base.service";

@Injectable({
  providedIn: 'root'
})
export class HighlightsProjectServiceService extends BaseService {
  /*baseUrl = 'http://localhost:8080/v1/api/highlight-projects';

  constructor(private _http:HttpClient) { }

  getAll(): Observable<IHighlightProject[]>{
    return this._http.get<IHighlightProject[]>(this.baseUrl);
  }*/

  url: string = ``

  constructor(private http: HttpClient) {
    super();
    this.url=`${this.basePath}/highlight-projects`
  }

  getAll(){
    return this.http.get<IHighlightProject[]>(this.url,this.httpOptions);
  }

}
