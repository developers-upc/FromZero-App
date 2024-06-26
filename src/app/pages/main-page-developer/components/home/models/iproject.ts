import {ICandidate} from "../../../../main-page-enterprise/components/home/models/icandidate";
import {IdeliverableTemp} from "../../../../main-page-enterprise/components/deliverables/model/ideliverableTemp";
import {ICandidateDeveloper} from "./ICandidateDeveloper";

export interface IProject {
  id:number,
  name: string;
  state: string;
  progress?: number;
  candidates?: ICandidateDeveloper[];
  numCandidates?: number;
  deliverables:IdeliverableTemp[]
}
