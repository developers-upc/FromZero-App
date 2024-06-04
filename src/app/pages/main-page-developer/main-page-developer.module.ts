import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageDeveloperRoutingModule } from './main-page-developer-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SidenavDeveloperComponent } from './components/sidenav-developer/sidenav-developer.component';
import { HomePageComponent } from './components/home/components/home-page/home-page.component';
import { MessageComponent } from './components/message/components/message/message.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAnchor} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardHeader, MatCardSmImage, MatCardTitle} from "@angular/material/card";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import { SearchProjectsComponent } from './components/search-projects/components/search-projects/search-projects.component';


@NgModule({
  declarations: [
    MainPageComponent,
    SidenavDeveloperComponent,
    HomePageComponent,
    MessageComponent,
    SearchProjectsComponent,
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
  ]
})
export class MainPageDeveloperModule { }
