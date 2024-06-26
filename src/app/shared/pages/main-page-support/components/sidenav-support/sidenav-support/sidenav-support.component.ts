import { Component } from '@angular/core';
import {AuthApiService} from "../../../../../../pages/auth/services/auth-api.service";

@Component({
  selector: 'app-sidenav-support',
  templateUrl: './sidenav-support.component.html',
  styleUrl: './sidenav-support.component.css'
})
export class SidenavSupportComponent {
  //@Output() onToggleSideNav:EventEmitter<SidenavToggle> = new EventEmitter();

  user:any;
  expand=false;
  screenWidth=0;
  constructor(private authService:AuthApiService) {
  }
  ngOnInit(){
    this.screenWidth=window.innerWidth;
    const userId = localStorage.getItem('userId');
    const userIdNumber=userId?+userId:null;
    const newUserIdNumber:number=userIdNumber??0;
  }

  toggleExpand(){
    this.expand = !this.expand;
    /*this.onToggleSideNav.emit({
      screenWidth: this.screenWidth,
      expanded:this.expand
    })*/
  }
}
