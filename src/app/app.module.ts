import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatFormFieldModule} from "@angular/material/form-field";
import { FooterComponent } from './shared/components/footer/footer.component';
import { ExampleDirective } from './shared/directives/example.directive';
import { ExamplePipe } from './shared/pipes/example.pipe';
import { LoginComponent } from './pages/auth/components/login/login.component';
import { HomeProfileComponent } from './pages/home/home-enterprise/components/home-profile/home-profile.component';
import { HomeProjectsComponent } from './pages/home/home-enterprise/components/home-projects/home-projects.component';
import { EditProfileDialogComponent } from './pages/home/home-enterprise/components/edit-profile-dialog/edit-profile-dialog.component';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatProgressBar} from "@angular/material/progress-bar";
import { CandidatesProjectDialogComponent } from './pages/home/home-enterprise/components/candidates-project-dialog/candidates-project-dialog.component';
import { HomePageComponent } from './pages/home/home-enterprise/components/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ExampleDirective,
    ExamplePipe,
    LoginComponent,
    HomeProfileComponent,
    HomeProjectsComponent,
    EditProfileDialogComponent,
    CandidatesProjectDialogComponent,
    HomePageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatDialogModule,
        MatDialogTitle,
        MatDialogContent,
        MatInput,
        MatDialogActions,
        FormsModule,
        MatDialogClose,
        MatProgressBar
    ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
