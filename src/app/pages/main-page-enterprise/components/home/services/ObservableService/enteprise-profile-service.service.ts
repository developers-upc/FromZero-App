import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {IEnterpriseProfileUpdate} from "../../models/enterprise-profile-update.model";

@Injectable({
  providedIn: 'root'
})
export class EntepriseProfileService {
  private profileData!: IEnterpriseProfileUpdate;
  private profileDataSubject: Subject<IEnterpriseProfileUpdate> = new Subject<IEnterpriseProfileUpdate>();

  setProfileData(data: IEnterpriseProfileUpdate) {
    this.profileData = data;
    this.profileDataSubject.next(data);
  }

  getProfileData() {
    return this.profileData;
  }

  getProfileDataObservable() {
    return this.profileDataSubject.asObservable();
  }
}
