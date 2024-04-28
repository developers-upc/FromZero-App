import { Component } from '@angular/core';
import {IEnterpriseProfile} from "../../models/enterprise-profile.model";

@Component({
  selector: 'app-home-profile',
  templateUrl: './home-profile.component.html',
  styleUrl: './home-profile.component.css'
})
export class HomeProfileComponent {
  perfilUsuario: IEnterpriseProfile = {
    name: 'FromZero',
    description: 'A startup that helps other startups to grow',
    country: 'Brazil',
    cellphone: '+55 11 99999-9999',
    email: 'kukuku@upc.pe',
    website: 'https://fromzero.com',
    image: 'https://geekitpe.com/wp-content/uploads/2022/11/152x152.jpg',
    sector: 'Technology',
    projects: [],
  }
}
