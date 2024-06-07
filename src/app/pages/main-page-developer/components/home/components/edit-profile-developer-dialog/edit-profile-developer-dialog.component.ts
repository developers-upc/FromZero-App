import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IDeveloperProfile} from "../../models/developer-profile.model";

@Component({
  selector: 'app-edit-profile-developer-dialog',
  templateUrl: './edit-profile-developer-dialog.component.html',
  styleUrl: './edit-profile-developer-dialog.component.css'
})
export class EditProfileDeveloperDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EditProfileDeveloperDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDeveloperProfile) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
