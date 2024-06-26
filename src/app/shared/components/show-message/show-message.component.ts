import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {IMessage} from "../../pages/inbox/model/imessage";

@Component({
  selector: 'app-show-message',
  templateUrl: './show-message.component.html',
  styleUrl: './show-message.component.css'
})
export class ShowMessageComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: {message: IMessage}) {
    }
}
