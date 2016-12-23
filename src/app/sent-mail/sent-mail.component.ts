import { Component, OnInit } from '@angular/core';

import { GmailService } from '../service/gmail.service';
import { Email } from '../models/email';

@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent{
	emails: Email[];
	constructor(private gmailService: GmailService) {
		this.gmailService.sentMail()
		.subscribe(
			emails => this.emails = emails, //Bind to view
			err => {
				// Log errors if any
				console.log(err);
			});
	}
}
