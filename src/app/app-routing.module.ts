import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthModule} from "./pages/auth/auth.module";
import {MainPageEnterpriseModule} from "./pages/main-page-enterprise/main-page-enterprise.module";
const routes: Routes = [
  // {
  //   path: 'login', component: LoginComponent
  // },
  // {
  //   path: 'register', component: RegisterComponent
  // },
  // {
  //   path: 'recover-password', component: RecoverPasswordComponent
  // },
  // {
  //   path:':projectId/deliverables', component:DeliverablesComponent
  // },
  // {
  //   path: ':developerId/message', component: MessageComponent
  // },
  // {
  //   path: 'support', component: SupportComponent
  // },
  // {
  //   path: 'lookingdevop', component: LookingfordevelopComponent
  // },
  {
    path:'',
    loadChildren:()=>import('./pages/auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'app',
    loadChildren:()=>import("./pages/main-page-enterprise/main-page-enterprise.module").then(m=>m.MainPageEnterpriseModule)
  }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
