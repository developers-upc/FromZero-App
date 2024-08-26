import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthApiService} from "../../../pages/auth/services/auth-api.service";
import {MessagesApiService} from "../../pages/inbox/services/messages-api.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  messageForm:FormGroup;
  messageSended = false;
  constructor(private fb:FormBuilder,private authService:AuthApiService,
              private messageService:MessagesApiService) {
    this.messageForm=this.fb.group({
      recipient: new FormControl('',Validators.required),
      subject: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required)
    })
  }

  onSubmit(){
    this.messageSended=false;
    let recipientEmail=this.messageForm.get('recipient')?.value;
    let senderId = Number(localStorage.getItem('id'));
    this.authService.getUserByEmail(recipientEmail).subscribe((response:any)=>{
      let user = response;
      let message={
        subject:this.messageForm.get('subject')?.value,
        emailBody:this.messageForm.get('content')?.value,
        recipientId:user.id,
        senderId:senderId
      }
      this.messageService.postMessage(message).subscribe(response=>{
        console.log(response)
        this.messageSended=true;
      })
    })

  }

}
