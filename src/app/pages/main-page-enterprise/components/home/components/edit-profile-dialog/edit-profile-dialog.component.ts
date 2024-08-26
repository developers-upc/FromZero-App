import {Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IEnterpriseProfile } from "../../models/enterprise-profile.model";
import {AuthApiService} from "../../../../../auth/services/auth-api.service";
import {IEnterpriseProfileUpdate} from "../../models/enterprise-profile-update.model";
import {ProfileService} from "../../../../../../core/services/profiles/profile.service";

@Component({
  selector: 'app-edit-profile-dialog',
  templateUrl: './edit-profile-dialog.component.html',
  styleUrl: './edit-profile-dialog.component.css'
})
export class EditProfileDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IEnterpriseProfile,
    private _authService: AuthApiService,
    private _profileService:ProfileService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateProfile(): void {
    /*let idEnterprise: number = Number(localStorage.getItem('enterpriseId'));
    let originalData = {...this.data};
    this.data.id = idEnterprise;*/
    let idEnterprise: number = Number(localStorage.getItem('id'))
    let originalData = {...this.data};
    this.data.id = idEnterprise;

    // Crear un objeto con la estructura esperada por el endpoint
    let updateData: IEnterpriseProfileUpdate = {
      id: this.data.id,
      description: this.data.description, // Asegúrate de que estos nombres de propiedades coinciden con los de tu objeto `data`
      country: this.data.country,
      ruc: this.data.ruc,
      phone: this.data.phone,
      website: this.data.website,
      profileImgUrl: this.data.profileImgUrl,
      sector: this.data.sector
    };

    console.log(updateData);
    this._profileService.updateEnterpriseProfile(idEnterprise, updateData).subscribe(response => {
      console.log(response);
      this.dialogRef.close();
    }, error => {
      this.data = originalData;
    });
  }
}
