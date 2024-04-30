export interface IEnterpriseProfile {
  name: string;
  description: string;
  country: string;
  socialRazon: string;
  cellphone: string;
  email: string;
  website: string;
  image: string;
  sector: string;
  projects: IProject[];
}

export interface IProject {
  name: string;
  state: string;
  progress?: number;
  candidates?: ICandidate[];
  numCandidates?: number;
}

export interface ICandidate {
  name: string;
  description: string;
  image: string;
  state: string;
  link: string;
}
