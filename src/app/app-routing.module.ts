import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MessageComponent} from "./pages/message/components/message/message.component";


const routes: Routes = [
  {
    path: ':developerId/message', component: MessageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
