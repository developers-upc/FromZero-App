import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SupportComponent} from "./components/support/support.component";
import {
  ProjectListComponent
} from "./pages/highlight-projects/components/project-list/project-list.component";
import {SupportDashboardComponent} from "./pages/main-page-support/pages/support-dashboard/support-dashboard.component";
import {MessageComponent} from "./components/message/message.component";
import {InboxComponent} from "./pages/inbox/components/inbox/inbox.component";

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
    path:'message',
    component: MessageComponent
  },
  {
    path:'inbox',
    component: InboxComponent
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
