import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  LookingfordevelopComponent
} from "./pages/lookingfordevelop/components/lookingfordevelop/lookingfordevelop.component";

const routes: Routes = [
  {
    path: 'lookingdevop', component: LookingfordevelopComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
