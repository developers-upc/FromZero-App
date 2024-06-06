import {Component} from '@angular/core';
import {AuthApiService} from "../../services/auth-api.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

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
    accountType: new FormControl('', Validators.required),
    companyName: new FormControl(''),
    developerName: new FormControl(''),
    developerLastName: new FormControl(''),
  })

  constructor(private authService: AuthApiService) {
  }

  register() {
    const emailControl = this.registerForm.get('email');
    const enterpriseNameControl = this.registerForm.get('companyName');
    const developerNameControl = this.registerForm.get('developerName');
    const developerLastNameControl = this.registerForm.get('developerLastName');
    const passwordControl = this.registerForm.get('password');
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
