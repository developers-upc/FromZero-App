import {Component, Input, OnInit} from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { EditProfileDialogComponent } from '../edit-profile-dialog/edit-profile-dialog.component';
import {IEnterpriseProfileTemp} from "../../models/ienterprise-profile";
import {Router} from "@angular/router";
import {EntepriseProfileService} from "../../services/ObservableService/enteprise-profile-service.service";
import {IEnterpriseProfileUpdate} from "../../models/enterprise-profile-update.model";

@Component({
  selector: 'app-home-profile',
  templateUrl: './home-profile.component.html',
  styleUrl: './home-profile.component.css'
})
export class HomeProfileComponent implements OnInit{
  @Input() perfilUsuario!:IEnterpriseProfileUpdate

  constructor(private router:Router,public dialog: MatDialog, private profileService: EntepriseProfileService) {}

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

  goToInbox(){
    this.router.navigate(["/app/main/shared/inbox"])
  }

  ngOnInit() {
    this.profileService.getProfileDataObservable().subscribe(data => {
      this.perfilUsuario = data;
    });
  }
}
