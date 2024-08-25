import {Component} from '@angular/core';
import {AuthApiService} from "../../../auth/services/auth-api.service";
import {ProfileService} from "../../../../core/services/profiles/profile.service";

@Component({
  selector: 'app-sidenav-developer',
  templateUrl: './sidenav-developer.component.html',
  styleUrl: './sidenav-developer.component.css'
})
export class SidenavDeveloperComponent {
  user:any;
  expand=false;
  screenWidth=0;
  constructor(
    private authService:AuthApiService,
    private _profileService:ProfileService) {
  }
  ngOnInit(){
    this.screenWidth=window.innerWidth;
    const userId = localStorage.getItem('userId');
    const userIdNumber=userId?+userId:null;
    const newUserIdNumber:number=userIdNumber??0;
    this._profileService.getDeveloperProfileById(newUserIdNumber).subscribe(profile => {
      this.user=profile;
    })
  }
  logout(): void {
    localStorage.removeItem('userId');
    localStorage.removeItem('developerId');
  }
  toggleExpand(){
    this.expand = !this.expand;
  }

}
