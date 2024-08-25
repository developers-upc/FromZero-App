import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IHighlightProject} from "../../model/ihighlight-project";
import {BaseService} from "../../../../../core/services/shared/base.service";

@Injectable({
  providedIn: 'root'
})
export class HighlightsProjectServiceService extends BaseService {
  url: string = ``

  constructor(private http: HttpClient) {
    super();
    this.url=`${this.basePath}/highlight-projects`
  }

  getAll(){
    return this.http.get<IHighlightProject[]>(this.url,this.httpOptions);
  }

}
