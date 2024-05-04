import {IDeliverable} from "../../deliverables/model/ideliverable";
import {ICandidate} from "./icandidate";

export interface IProject {
  id:number,
  name: string;
  state: string;
  progress?: number;
  candidates?: ICandidate[];
  numCandidates?: number;
  deliverables:IDeliverable[]
}
