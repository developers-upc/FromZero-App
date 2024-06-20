import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import {MainPageComponent} from "./pages/main-page/main-page.component";
//import {HomePageComponent} from "./components/home/components/home-page/home-page.component";
import {MessageComponent} from "./components/message/components/message/message.component";
import {
  SearchProjectsComponent
} from "./components/search-projects/components/search-projects/search-projects.component";
import {ApplyToProjectComponent} from "./components/projects/apply-to-project/apply-to-project.component";
import {
  ProjectProfilePageComponent
} from "./components/project-profile/components/project-profile-page/project-profile-page.component";
import {DevDeliverablesComponent} from "./components/dev-deliverables/dev-deliverables.component";
import {SendDeliverableComponent} from "./components/send-deliverable/send-deliverable.component";
import {MainPageDeveloperComponent} from "./pages/main-page-developer/main-page-developer.component";
import {
  HomePageDeveloperComponent
} from "./components/home/components/home-page-developer/home-page-developer.component";

const routes: Routes = [

  {
    path:"main",
    component: MainPageDeveloperComponent,
    children:[
      {
        path:"home",
        component:HomePageDeveloperComponent,
      },
      {
        path: 'message',
        component: MessageComponent
      },
      {
        path: 'search-projects',
        component: SearchProjectsComponent
      },
      {
        path: 'apply-to-project/:id',
        component: ApplyToProjectComponent
      },
      {
        path:'shared',
        loadChildren:()=>import("../../shared/shared.module").then(m=>m.SharedModule)
      },
      {
        path: 'enterprise-profile/:enterpriseId',
        component: ProjectProfilePageComponent
      },
      {
        path:':projectId/deliverables',
        component:DevDeliverablesComponent
      },
      {
        path:':projectId/deliverables/:deliverableId',
        component:SendDeliverableComponent
      }

    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageDeveloperRoutingModule { }
