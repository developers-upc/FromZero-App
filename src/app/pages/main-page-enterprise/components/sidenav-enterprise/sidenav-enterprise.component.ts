import {Component, EventEmitter, Output} from '@angular/core';
import {IUserSidenav} from "../../../../shared/model/iuser-sidenav";

interface SidenavToggle{
  screenWidth: number;
  expanded:boolean;
}

@Component({
  selector: 'app-sidenav-enterprise',
  templateUrl: './sidenav-enterprise.component.html',
  styleUrl: './sidenav-enterprise.component.css'
})
export class SidenavEnterpriseComponent {
  @Output() onToggleSideNav:EventEmitter<SidenavToggle> = new EventEmitter();
  user:IUserSidenav={
    name:'user',
    urlToImage:'',
  }
  expand=false;
  screenWidth=0;

  ngOnInit(){
    this.screenWidth=window.innerWidth;
  }

  toggleExpand(){
    this.expand = !this.expand;
    this.onToggleSideNav.emit({
      screenWidth: this.screenWidth,
      expanded:this.expand
    })
  }
}
