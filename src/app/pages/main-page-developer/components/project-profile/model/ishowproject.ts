import {IDeveloperProject} from "./ideveloper-project";

export interface Ishowproject {

  id: number,
  name: string,
  description: string,
  state: string,
  progress: number,
  ownerid: number,
  type: string,
  budget: string,
  methodologies: string,
  repository: IDeveloperProject[],
}
