import {Component, OnInit} from '@angular/core';
import {IsupportMessage} from "../../model/isupport-message";
import {SupportMessageService} from "../../services/support-message-service/support-message.service";

@Component({
  selector: 'app-support-message-list',
  templateUrl: './support-message-list.component.html',
  styleUrl: './support-message-list.component.css'
})
export class SupportMessageListComponent implements OnInit{
    supportMessages!: IsupportMessage[];

    constructor(private _supportMessageService: SupportMessageService) {
    }
    ngOnInit(): void {
        this._supportMessageService.getAll().subscribe((supportMessages: IsupportMessage[]) => {
          this.supportMessages = supportMessages;
      });
    }

}
