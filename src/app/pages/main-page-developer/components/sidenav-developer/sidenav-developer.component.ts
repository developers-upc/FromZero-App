import {Component, EventEmitter, Output} from '@angular/core';
import {AuthApiService} from "../../../auth/services/auth-api.service";

@Component({
  selector: 'app-sidenav-developer',
  templateUrl: './sidenav-developer.component.html',
  styleUrl: './sidenav-developer.component.css'
})
export class SidenavDeveloperComponent {

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
    this.authService.getDeveloperProfileById(newUserIdNumber).subscribe(profile => {
      this.user=profile;
    })
  }
  logout(): void {
    localStorage.removeItem('userId');
    localStorage.removeItem('developerId');
  }
  toggleExpand(){
    this.expand = !this.expand;
    /*this.onToggleSideNav.emit({
      screenWidth: this.screenWidth,
      expanded:this.expand
    })*/
  }

}
