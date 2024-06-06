import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthModule} from "./pages/auth/auth.module";
import {MainPageEnterpriseModule} from "./pages/main-page-enterprise/main-page-enterprise.module";
import {MainPageDeveloperModule} from "./pages/main-page-developer/main-page-developer.module";
const routes: Routes = [

  {
    path:'',
    loadChildren:()=>import('./pages/auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'app',
    loadChildren:()=>import("./pages/main-page-enterprise/main-page-enterprise.module").then(m=>m.MainPageEnterpriseModule)
  },

  {
    path:'app-developer',
    loadChildren:()=>import("./pages/main-page-developer/main-page-developer.module").then(m=>m.MainPageDeveloperModule)
  },
  {
    path:'support',
    loadChildren:()=>import("./shared/shared.module").then(m=>m.SharedModule)
  }

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
