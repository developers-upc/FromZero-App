import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    path:'shared',
    loadChildren:()=>import("./shared/shared.module").then(m=>m.SharedModule)
  }

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
