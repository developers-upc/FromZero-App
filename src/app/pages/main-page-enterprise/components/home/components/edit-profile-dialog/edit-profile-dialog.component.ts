import {Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {IEnterpriseProfileUpdate} from "../../models/enterprise-profile-update.model";
import {ProfileService} from "../../../../../../core/services/profiles/profile.service";
import {IEnterpriseProfileTemp} from "../../../../../../core/models/ienterprise-profile";

@Component({
  selector: 'app-edit-profile-dialog',
  templateUrl: './edit-profile-dialog.component.html',
  styleUrl: './edit-profile-dialog.component.css'
})
export class EditProfileDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IEnterpriseProfileTemp,
    private _profileService:ProfileService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateProfile(): void {
    let idEnterprise: number = Number(localStorage.getItem('id'))
    let originalData = {...this.data};
    this.data.id = idEnterprise;

    let updateData: IEnterpriseProfileUpdate = {
      id: this.data.id,
      description: this.data.description,
      country: this.data.country,
      ruc: this.data.ruc,
      phone: this.data.phone,
      website: this.data.website,
      profileImgUrl: this.data.profileImgUrl,
      sector: this.data.sector
    };

    this._profileService.updateEnterpriseProfile(idEnterprise, updateData).subscribe({
      next:(response)=>{
        console.log(response);
        this.dialogRef.close();
      },error:()=>{
        this.data = originalData;
      }
    })
  }
}
