import {ICandidate} from "./icandidate";
import {IProgrammingLanguages} from "./iprogramming-languages";
import {IFramework} from "./iframework";

export interface IProject {
  id:number,
  name:string,
  description:string,
  state:string,
  progress:number,
  ownerId:number,
  developerId?:number,
  candidatesList:ICandidate[],
  languages:IProgrammingLanguages[],
  frameworks:IFramework[],
  type:string,
  budget:string,
  methodologies:string
}
