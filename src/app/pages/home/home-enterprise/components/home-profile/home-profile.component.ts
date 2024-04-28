import { Component } from '@angular/core';
import {IEnterpriseProfile} from "../../models/enterprise-profile.model";
import { MatDialog } from "@angular/material/dialog";
import { EditProfileDialogComponent } from '../edit-profile-dialog/edit-profile-dialog.component';

@Component({
  selector: 'app-home-profile',
  templateUrl: './home-profile.component.html',
  styleUrl: './home-profile.component.css'
})
export class HomeProfileComponent {
  perfilUsuario: IEnterpriseProfile = {
    name: 'Geekit',
    description: 'Geekit es tu destino para la moda geek. Nos especializamos en ofrecer una selección única de ropa y accesorios para jóvenes apasionados por la cultura pop, los videojuegos, el cine y los cómics. En Geekit, encontrarás prendas que te permiten expresar tu estilo auténtico y tu amor por tus intereses favoritos.',
    country: 'Peru',
    socialRazon: '20405979381',
    cellphone: '+55 11 99999-9999',
    email: 'kukuku@upc.pe',
    website: 'https://fromzero.com',
    image: 'https://geekitpe.com/wp-content/uploads/2022/11/152x152.jpg',
    sector: 'Technology',
    projects: [],
  }

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(EditProfileDialogComponent, {
      width: '600px',
      data: { ...this.perfilUsuario }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.perfilUsuario = result;
        console.log('The dialog was closed', result);
      }
    });
  }
}
