import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {RecoverPasswordComponent} from "./components/recover-password/recover-password.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {AuthRoutingModule} from "./auth-routing.module";
import {HttpClientModule, provideHttpClient, withInterceptors} from "@angular/common/http";
//import {authInterceptor} from "../../core/interceptors/authInterceptor/auth.interceptor";

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RecoverPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule,
    HttpClientModule
  ],
  /*providers: [
    provideHttpClient(
      withInterceptors([authInterceptor])
    )
  ]*/
})
export class AuthModule { }
