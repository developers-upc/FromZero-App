import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {HomePageComponent} from "./components/home/components/home-page/home-page.component";

const routes: Routes = [

  {
    path:"main",
    component: MainPageComponent,
    children:[
      {
        path:"home",
        component:HomePageComponent,
      }




    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageDeveloperRoutingModule { }
