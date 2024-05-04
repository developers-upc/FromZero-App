import {AccountType} from "./account-type";
import {IProject} from "../../main-page-enterprise/components/home/models/iproject";

export interface IProfile {
  username: string,
  email: string,
  imageProfile: string,
  accountType: AccountType,
  summary: string,
  country: string,
  cellphone: string,
  completedProjects?: number,
  specialties?: string,
  socialRazon?: string,
  website?: string,
  sector?: string,
  projects?: IProject[]
}
