import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import {FooterComponent} from "./components/footer/footer.component";
import {SupportComponent} from "./components/support/support.component";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  ProjectListComponent
} from "./pages/highlight-projects/components/project-list/project-list.component";
import {MatIconModule} from "@angular/material/icon";
import { MessageComponent } from './components/message/message.component';
import { InboxComponent } from './pages/inbox/components/inbox/inbox.component';
import { ShowMessageComponent } from './components/show-message/show-message.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    FooterComponent,
    SupportComponent,
    ProjectListComponent,
    MessageComponent,
    InboxComponent,
    ShowMessageComponent
  ],
    imports: [
        CommonModule,
        SharedRoutingModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatIconModule,
        FormsModule,
        MatDialogModule
    ],
  exports:[
    FooterComponent,
    ProjectListComponent
  ]
})
export class SharedModule { }
