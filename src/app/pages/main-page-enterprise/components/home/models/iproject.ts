import {IDeliverable} from "../../deliverables/model/ideliverable";
import {ICandidate} from "./icandidate";

export interface IProject {
  /*id:number,
  name: string;
  state: string;
  progress?: number;
  candidates?: ICandidate[];
  numCandidates?: number;
  deliverables:IDeliverable[]*/

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
