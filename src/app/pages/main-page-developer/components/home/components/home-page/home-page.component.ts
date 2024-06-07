import {Component, OnInit} from '@angular/core';
import {IEnterpriseProfile} from "../../../../../main-page-enterprise/components/home/models/enterprise-profile.model";
import {IDeveloperProfile} from "../../models/developer-profile.model";
import {AuthApiService} from "../../../../../auth/services/auth-api.service";
import {IProject} from "../../../../../main-page-enterprise/components/home/models/iproject";
import {ICandidate} from "../../../../../main-page-enterprise/components/home/models/icandidate";
import {IDeliverable} from "../../../../../main-page-enterprise/components/deliverables/model/ideliverable";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  perfilUsuario!: IDeveloperProfile;
  userProjects2!: IProject[];

  userProjects:IProject[]=[
    {
      id:1,
      name:"Landing Page Geekit",
      state:"En proceso",
      progress:10,
      candidates:[],
      numCandidates:0,
      deliverables:[]
    }
    ]
  /*id:number,
  name: string;
  state: string;
  progress?: number;
  candidates?: ICandidate[];
  numCandidates?: number;
  deliverables:IDeliverable[]*/

  constructor(private _authService: AuthApiService) {

  }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this._authService.getDeveloperProfileById(+userId).subscribe(profile => {
        this.perfilUsuario = profile;
        //this.userProjects = profile.projects;
      });
    }
  }

}
