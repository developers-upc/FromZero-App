import {IdeliverableTemp} from "../../deliverables/model/ideliverableTemp";
import {ICandidate} from "./icandidate";

export interface IProject {
  /*id:number,
  name: string;
  state: string;
  progress?: number;
  candidates?: ICandidate[];
  numCandidates?: number;
  deliverables:IdeliverableTemp[]*/

  id:number,
  name:string,
  description:string,
  state:string,
  progress:number,
  ownerId:number,
  developerId?:number,
  candidatesList:ICandidate[],
  languages:[],
  frameworks:[],
  type:string,
  budget:string,
  methodologies:string
}
