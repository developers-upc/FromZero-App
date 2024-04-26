import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/auth/components/login/login.component";
import {RegisterComponent} from "./pages/auth/components/register/register.component";
import {RecoverPasswordComponent} from "./pages/auth/components/recover-password/recover-password.component";

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },

  {
    path: 'register', component: RegisterComponent
  },

  {
    path: 'recover-password', component: RecoverPasswordComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
