import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup} from "@angular/forms";
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
    username: new FormControl(''),
    password: new FormControl(''),
  })

  validateLogin(): void {
    const usernameControl = this.loginForm.get('username');
    const passwordControl = this.loginForm.get('password');

    if (usernameControl && passwordControl) {
      const username = usernameControl.value;
      const password = passwordControl.value;

      if (username !== null && password !== null) {
        this._authService.validateUser(username, password).subscribe(user => {
        if (user) {
          localStorage.setItem('userId', user.id.toString());
          this.router.navigate(['/app/main/home']);
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
