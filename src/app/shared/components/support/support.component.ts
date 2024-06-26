import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {
  SupportMessageService
} from "../../pages/main-page-support/services/support-message-service/support-message.service";

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent{
  supportTicketSended=false;
  supportForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private supportService: SupportMessageService) {
  this.supportForm = this.formBuilder.group({
    title: ['', Validators.required],
    problemType: ['', Validators.required],
    description: ['', Validators.required]
  });
}

  onSubmit(): void {
    this.supportTicketSended = false;
    let senderId = Number(localStorage.getItem('userId'));
    let supportTicket = {
      title: this.supportForm.get('title')?.value,
      type: this.supportForm.get('problemType')?.value,
      description: this.supportForm.get('description')?.value,
      senderId: senderId
    }
    this.supportService.postSupportTicket(supportTicket).subscribe(response => {
      console.log(response);
      this.supportTicketSended = true;
    })
  }
}
