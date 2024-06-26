import { Component } from '@angular/core';

@Component({
  selector: 'app-support-dashboard',
  templateUrl: './support-dashboard.component.html',
  styleUrl: './support-dashboard.component.css'
})
export class SupportDashboardComponent {
  title = 'FromZero-App';

  isSidenavExpanded=false;
  screenWidth=0;

  onToggleSidenav(data:any){
    this.screenWidth=data.screenWidth;
    this.isSidenavExpanded = data.expanded;
    console.log(this.screenWidth);
  }

  getContentClass():string{
    let styleClass='';
    if(this.isSidenavExpanded && this.screenWidth >768 ) {
      styleClass = 'content-trimmed';
    }
    return styleClass;
  }
}
