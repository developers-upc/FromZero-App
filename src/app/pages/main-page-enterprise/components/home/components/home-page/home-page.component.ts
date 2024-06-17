import {Component, OnInit} from '@angular/core';
import {AuthApiService} from "../../../../../auth/services/auth-api.service";
import {IEnterpriseProfile} from "../../models/enterprise-profile.model";
import {IProject} from "../../models/iproject";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent  implements OnInit {
  perfilUsuario!: IEnterpriseProfile;
  userProjects!: IProject[];
  constructor(private _authService: AuthApiService) {
  }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this._authService.getProfileById(+userId).subscribe(profile => {
        this.perfilUsuario = profile;
        let profileID = this.perfilUsuario.id;
        //servicio de proyectos, get projects by
        this.userProjects = profile.projects;
      });
    }
  }
}
