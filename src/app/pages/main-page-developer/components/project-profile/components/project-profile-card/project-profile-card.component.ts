import {Component, Input} from '@angular/core';
import {Ishowproject} from "../../model/ishowproject";
import {IEnterpriseProfile} from "../../../../../main-page-enterprise/components/home/models/enterprise-profile.model";
import {IEnterpriseProfileTemp} from "../../../../../main-page-enterprise/components/home/models/ienterprise-profile";

@Component({
  selector: 'app-project-profile-card',
  templateUrl: './project-profile-card.component.html',
  styleUrl: './project-profile-card.component.css'
})
export class ProjectProfileCardComponent {
  @Input() perfilEnterprise!: IEnterpriseProfileTemp;

  constructor() { }

}
