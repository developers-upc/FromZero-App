import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {IDeveloperProfileTemp} from "../../models/ideveloper-profile";
import {Router} from "@angular/router";
import {
  EditProfileDeveloperDialogComponent
} from "../edit-profile-developer-dialog/edit-profile-developer-dialog.component";
import {AuthApiService} from "../../../../../auth/services/auth-api.service";

@Component({
  selector: 'app-home-profile-developer',
  templateUrl: './home-profile-developer.component.html',
  styleUrl: './home-profile-developer.component.css'
})
export class HomeProfileDeveloperComponent {
  @Input() perfilUsuario!: IDeveloperProfileTemp;

  constructor(
    private router:Router,
    public dialogRef: MatDialog,
    private _authService: AuthApiService) {}

  openDialog(): void {
    const dialogRef = this.dialogRef.open(EditProfileDeveloperDialogComponent, {
      width: '600px',
      data: this.perfilUsuario
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.perfilUsuario = result;
        console.log('The dialog was closed', result);
      }
    });
  }

  goToInbox(){
    /*console.log(this.perfilUsuario.email)
    this._authService.getUserByEmail(this.perfilUsuario.email).subscribe(response=>{
      console.log("Mi id de usuario es "+response)
      localStorage.setItem("userId",response.toString())
    })*/
    this.router.navigate(["/app-developer/main/shared/inbox"])
  }

}
