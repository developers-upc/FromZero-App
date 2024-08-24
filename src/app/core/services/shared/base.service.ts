import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment.development";
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  basePath: string = `${environment.serverBasePath}`

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor() { }

}
