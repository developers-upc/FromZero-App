import {Component, Input, OnInit} from '@angular/core';
import {IEnterpriseProfile} from "../../models/enterprise-profile.model";
import { MatDialog } from "@angular/material/dialog";
import { EditProfileDialogComponent } from '../edit-profile-dialog/edit-profile-dialog.component';
import {AuthApiService} from "../../../../../auth/services/auth-api.service";

@Component({
  selector: 'app-home-profile',
  templateUrl: './home-profile.component.html',
  styleUrl: './home-profile.component.css'
})
export class HomeProfileComponent {
  @Input() perfilUsuario!: IEnterpriseProfile;

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
