import {Component} from '@angular/core';
import {AuthApiService} from "../../services/auth-api.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  users: any[] = ["desarrollador", "empresa"]

  registerForm = new FormGroup({
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    accountType:new FormControl(0)
  })

  constructor(private authService: AuthApiService) {
  }

  register() {
    const usernameControl = this.registerForm.get('username');
    const passwordControl = this.registerForm.get('password');
    const emailControl = this.registerForm.get('email');
    const accountTypeControl=this.registerForm.get('accountType')

    if(usernameControl && passwordControl && emailControl) {
      const username = usernameControl.value;
      const password = passwordControl.value;
      const email = emailControl.value;
      //const accountType= accountTypeControl.value;

      if(username !== null && password !== null && email !== null) {
        this.authService.createUser(username,password,email,0)
      }

    }
  }

}
