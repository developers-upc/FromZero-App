import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import {FooterComponent} from "./components/footer/footer.component";


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    FooterComponent
  ]
})
export class SharedModule { }
