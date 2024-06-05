import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageDeveloperRoutingModule } from './main-page-developer-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SidenavDeveloperComponent } from './components/sidenav-developer/sidenav-developer.component';
import { HomePageComponent } from './components/home/components/home-page/home-page.component';
import { MessageComponent } from './components/message/components/message/message.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAnchor, MatButton} from "@angular/material/button";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSmImage,
  MatCardTitle
} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import { SearchProjectsComponent } from './components/search-projects/components/search-projects/search-projects.component';
import { HomeProfileDeveloperComponent } from './components/home/components/home-profile-developer/home-profile-developer.component';
import {MatIcon} from "@angular/material/icon";
import { EditProfileDeveloperDialogComponent } from './components/home/components/edit-profile-developer-dialog/edit-profile-developer-dialog.component';
import {MatDialogActions, MatDialogContent, MatDialogModule, MatDialogTitle} from "@angular/material/dialog";


@NgModule({
  declarations: [
    MainPageComponent,
    SidenavDeveloperComponent,
    HomePageComponent,
    MessageComponent,
    SearchProjectsComponent,
    HomeProfileDeveloperComponent,
    EditProfileDeveloperDialogComponent,
  ],
  imports: [
    CommonModule,
    MainPageDeveloperRoutingModule,
    FormsModule,
    MatAnchor,
    MatCard,
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatCardContent,
    MatCardHeader,
    MatCardSmImage,
    MatCardTitle,
    MatCardImage,
    MatIcon,
    MatButton,
    //MatDialogActions,
    //MatDialogContent,
    //MatDialogTitle,
    MatLabel,
    MatDialogModule,
  ]
})
export class MainPageDeveloperModule { }
