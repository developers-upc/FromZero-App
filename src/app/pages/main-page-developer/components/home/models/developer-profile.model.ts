import {IProject} from "./iproject";

export interface IDeveloperProfile {
  id: number;
  username: string;
  email: string;
  imageProfile: string;
  accountType: number;
  summary: string;
  country: string;
  cellphone: string;
  socialRazon: string;
  website: string;
  sector: string;
  projects: IProject[];
}
