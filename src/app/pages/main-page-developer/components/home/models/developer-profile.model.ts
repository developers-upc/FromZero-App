import {IProject} from "./iproject";

export interface IDeveloperProfile {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  profileImgUrl: string;
  description: string;
  country: string;
  phone: string;
  specialties: string;
}
