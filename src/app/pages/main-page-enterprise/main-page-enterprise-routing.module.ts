import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from "./components/home/components/home-page/home-page.component";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {
  FormCreateProjectComponent
} from "./components/projects/components/form-create-project/form-create-project.component";
import {
  LookingfordevelopComponent
} from "./components/looking-for-developer/components/lookingfordevelop/lookingfordevelop.component";
import {ProjectListComponent} from "./components/highlight-projects/components/project-list/project-list.component";

const routes: Routes = [
  {
    path:'main',
    component: MainPageComponent,
    children:[
      {
        path:'home',
        component:HomePageComponent,
      },
      {
        path: 'create-project',
        component: FormCreateProjectComponent,
      },
      {
        path: 'search-developers',
        component: LookingfordevelopComponent
      },
      {
        path: 'highlight-projects',
        component: ProjectListComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppContentRoutingModule { }
