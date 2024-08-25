import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IDeveloperProfile} from "../../models/developer-profile.model";
import {AuthApiService} from "../../../../../auth/services/auth-api.service";
import {IDeveloperProfileUpdate} from "../../models/developer-profile-update.model";
import {ProfileService} from "../../../../../../core/services/profiles/profile.service";

@Component({
  selector: 'app-edit-profile-developer-dialog',
  templateUrl: './edit-profile-developer-dialog.component.html',
  styleUrl: './edit-profile-developer-dialog.component.css'
})
export class EditProfileDeveloperDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EditProfileDeveloperDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDeveloperProfile,
    private _authService: AuthApiService,
    private _profileService:ProfileService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateProfile(): void {
    let idDeveloper: number = Number(localStorage.getItem('developerId'));
    let originalData = {...this.data};
    this.data.id = idDeveloper;

    // Crear un objeto con la estructura esperada por el endpoint
    let updateData: IDeveloperProfileUpdate = {
      id: this.data.id,
      description: this.data.description, // Asegúrate de que estos nombres de propiedades coinciden con los de tu objeto `data`
      country: this.data.country,
      phone: this.data.phone,
      specialties: this.data.specialties,
      profileImgUrl: this.data.profileImgUrl
    };

    console.log(updateData);
    this._profileService.updateDeveloperProfile(idDeveloper, updateData).subscribe(response => {
      console.log(response);
      this.dialogRef.close();
    }, error => {
      this.data = originalData;
    });
  }
}
