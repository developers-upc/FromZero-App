import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageDeveloperRoutingModule } from './main-page-developer-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SidenavDeveloperComponent } from './components/sidenav-developer/sidenav-developer.component';
import { HomePageComponent } from './components/home/components/home-page/home-page.component';


@NgModule({
  declarations: [
    MainPageComponent,
    SidenavDeveloperComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    MainPageDeveloperRoutingModule,
  ]
})
export class MainPageDeveloperModule { }
