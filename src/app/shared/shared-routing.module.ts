import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SupportComponent} from "./components/support/support.component";
import {
  ProjectListComponent
} from "./pages/highlight-projects/components/project-list/project-list.component";
import {
  SupportMessageListComponent
} from "./pages/main-page-support/components/support-message-list/support-message-list.component";
import {SupportDashboardComponent} from "./pages/main-page-support/pages/support-dashboard/support-dashboard.component";

const routes: Routes = [
  {
    path:'support',
    component:SupportComponent
  },
  {
    path:'highlight-projects',
    component: ProjectListComponent
  },
  {
    path: 'support-home',
    component: SupportDashboardComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
