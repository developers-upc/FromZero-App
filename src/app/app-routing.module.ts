import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SupportComponent} from "./pages/support/components/support/support.component";

const routes: Routes = [
  {
    path: 'support', component: SupportComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
