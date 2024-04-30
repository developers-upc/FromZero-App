import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DeliverablesComponent} from "./pages/deliverables/components/deliverables/deliverables.component";

const routes: Routes = [
  {
    path:':projectId/deliverables',
    component:DeliverablesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
