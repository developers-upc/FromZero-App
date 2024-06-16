import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthApiService} from "../../services/auth-api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router, private _authService: AuthApiService) {
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
          localStorage.setItem('userId', user.id.toString());
          console.log(user)
          if (user.accountType==="E"){
            this.router.navigate(['/app/main/home']);
          }else if(user.accountType==="D"){
            this.router.navigate(['/app-developer/main/home']);
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
