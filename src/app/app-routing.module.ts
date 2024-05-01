import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/auth/components/login/login.component";
import {RegisterComponent} from "./pages/auth/components/register/register.component";
import {RecoverPasswordComponent} from "./pages/auth/components/recover-password/recover-password.component";
import {DeliverablesComponent} from "./pages/deliverables/components/deliverables/deliverables.component";
import {MessageComponent} from "./pages/message/components/message/message.component";
import {SupportComponent} from "./pages/support/components/support/support.component";
import { LookingfordevelopComponent } from "./pages/lookingfordevelop/components/lookingfordevelop/lookingfordevelop.component";

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },

  {
    path: 'register', component: RegisterComponent
  },

  {
    path: 'recover-password', component: RecoverPasswordComponent
  },
  {
    path:':projectId/deliverables', component:DeliverablesComponent
  },
    {
    path: ':developerId/message', component: MessageComponent
  },
  {
    path: 'support', component: SupportComponent
  },
    {
    path: 'lookingdevop', component: LookingfordevelopComponent
  },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
