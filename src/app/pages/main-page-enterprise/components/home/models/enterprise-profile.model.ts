import {IdeliverableTemp} from "../../deliverables/model/ideliverableTemp";
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

  /*id:number,
  enterpriseName:string,
  description:string,
  country:string,
  ruc:string,
  phone:string,
  website:string,
  user:{email:string},
  profileImgUrl:string,
  sector:string*/
}

/*export interface IProject {
  id:number,
  name: string;
  state: string;
  progress?: number;
  candidates?: ICandidate[];
  numCandidates?: number;
  deliverables:IdeliverableTemp[]
}

export interface ICandidate {
  name: string;
  description: string;
  image: string;
  state: string;
  link: string;
}*/
