import {IProject} from "./iproject";

export interface IEnterpriseProfile {
  id: number;
  username: string;
  email: string;
  profileImgUrl: string;
  accountType: number;
  description: string;
  country: string;
  phone: string;
  ruc: string;
  website: string;
  sector: string;
  projects: IProject[];
}
