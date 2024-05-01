import {Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IEnterpriseProfile } from "../../models/enterprise-profile.model";

@Component({
  selector: 'app-edit-profile-dialog',
  templateUrl: './edit-profile-dialog.component.html',
  styleUrl: './edit-profile-dialog.component.css'
})
export class EditProfileDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IEnterpriseProfile) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
