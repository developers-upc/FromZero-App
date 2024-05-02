import {IDeliverable} from "../../deliverables/model/ideliverable";

export interface IEnterpriseProfile {
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

export interface IProject {
  id:number,
  name: string;
  state: string;
  progress?: number;
  candidates?: ICandidate[];
  numCandidates?: number;
  deliverables:IDeliverable[]
}

export interface ICandidate {
  name: string;
  description: string;
  image: string;
  state: string;
  link: string;
}
