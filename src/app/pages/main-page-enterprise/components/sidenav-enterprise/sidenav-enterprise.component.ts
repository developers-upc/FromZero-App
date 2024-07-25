import {Component, EventEmitter, Output} from '@angular/core';
import {AuthApiService} from "../../../auth/services/auth-api.service";

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
    this.authService.getEnterpriseProfileById(newUserIdNumber).subscribe(profile => {
      this.user=profile;
    })
  }

  toggleExpand(){
    this.expand = !this.expand;
    this.onToggleSideNav.emit({
      screenWidth: this.screenWidth,
      expanded:this.expand
    })
  }
}
