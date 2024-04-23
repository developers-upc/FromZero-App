import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IUserSidenav} from "../../model/iuser-sidenav";

interface SidenavToggle{
  screenWidth: number;
  expanded:boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent implements OnInit {
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
