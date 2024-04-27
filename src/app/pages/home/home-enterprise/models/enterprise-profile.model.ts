export interface IEnterpriseProfile {
  name: string;
  description: string;
  country: string;
  cellphone: string;
  email: string;
  website: string;
  image: string;
  sector: string;
  projects: IProject[];
}

export interface IProject {
  name: string;
  description: string;
  image: string;
  link: string;
}
