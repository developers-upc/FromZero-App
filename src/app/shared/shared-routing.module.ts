import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SupportComponent} from "./components/support/support.component";
import {
  ProjectListComponent
} from "./pages/highlight-projects/components/project-list/project-list.component";
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
