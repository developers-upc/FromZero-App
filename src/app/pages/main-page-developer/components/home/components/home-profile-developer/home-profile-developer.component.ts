import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {
  EditProfileDialogComponent
} from "../../../../../main-page-enterprise/components/home/components/edit-profile-dialog/edit-profile-dialog.component";
import {IDeveloperProfileTemp} from "../../models/ideveloper-profile";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-profile-developer',
  templateUrl: './home-profile-developer.component.html',
  styleUrl: './home-profile-developer.component.css'
})
export class HomeProfileDeveloperComponent {
  @Input() perfilUsuario!: IDeveloperProfileTemp;

  constructor(private router:Router,public dialogRef: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialogRef.open(EditProfileDialogComponent, {
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

  goToInbox(){
    this.router.navigate(["/app-developer/main/shared/inbox"])
  }

}
