import {Component, OnInit} from '@angular/core';
import {MessagesApiService} from "../../services/messages-api.service";
import {IMessage} from "../../model/imessage";
import {MatDialog} from "@angular/material/dialog";
import {ShowMessageComponent} from "../../../../components/show-message/show-message.component";

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.css'
})
export class InboxComponent implements OnInit{
  messagesList!:IMessage[];
  constructor(private messagesService:MessagesApiService,public dialog:MatDialog) {
  }
  ngOnInit(){
    let recipientId = Number(localStorage.getItem('id'));
    this.messagesService.getAllMessagesByRecipientId(recipientId).subscribe(response=>{
      this.messagesList=response;
      this.messagesList.reverse();
    })
  }
  showMessage(message:IMessage){
    this.dialog.open(ShowMessageComponent, {
      data:{
        message:message
      }
    })
  }
}
