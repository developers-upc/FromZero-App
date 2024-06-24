import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  messageForm:FormGroup;
  constructor(private fb:FormBuilder) {
    this.messageForm=this.fb.group({
      recipient: new FormControl('',Validators.required),
      subject: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required)
    })
  }



}
