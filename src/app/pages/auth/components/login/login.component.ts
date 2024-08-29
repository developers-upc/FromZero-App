import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthApiService} from "../../services/auth-api.service";
import {ProfileService} from "../../../../core/services/profiles/profile.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private router: Router,
    private _authService: AuthApiService,
    private _profileService: ProfileService) {
  }
  loginForm = new FormGroup( {
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  validateLogin(): void {
    const emailControl = this.loginForm.get('email');
    const passwordControl = this.loginForm.get('password');

    if (emailControl && passwordControl) {
      const email = emailControl.value;
      const password = passwordControl.value;

      if (email !== null && password !== null) {
        this._authService.validateUser(email, password).subscribe(user => {
        if (user) {
          /*localStorage.setItem('userId', user.id.toString());
          console.log(user)*/
          localStorage.setItem('token',user.token.toString())
          let userEmail = user.email

          if (user.accountType==='E'){
            this._profileService.getCompanyProfileIdByEmail(userEmail).subscribe(id=>{
              localStorage.setItem('id',id.toString())
              this._authService.getUserByEmail(userEmail).subscribe(userId => {
                localStorage.setItem("userId",userId.toString())
              })
            })
          }else if (user.accountType==='D'){
            this._profileService.getDeveloperProfileIdByEmail(userEmail).subscribe(id=>{
              localStorage.setItem('id',id.toString())
              this._authService.getUserByEmail(userEmail).subscribe(userId => {
                localStorage.setItem("userId",userId.toString())
              })
            })
          }

          //Activar luego
          if (user.accountType==="E"){
            this.router.navigate(['/app/main/home']);
          }else if(user.accountType==="D"){
            this.router.navigate(['/app-developer/main/home']);
          }else if(user.accountType ==="S"){
            this.router.navigate(['/shared/support-home']);
          }

        } else {
          // Mostrar un mensaje de error
          console.error('Invalid username or password');
        }
      });
      } else {
        console.error('Username or password is null');
      }
    } else {
      console.error('Username or password control does not exist');
    }
  }
}
