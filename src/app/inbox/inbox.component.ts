import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'toastr-ng2';

import { GmailService } from '../service/gmail.service';
import { Email } from '../models/email';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent {
	emails: Email[];
	constructor(private gmailService: GmailService) {
		this.gmailService.inbox()
		.subscribe(
			emails => this.emails = emails, //Bind to view
			err => {
				// Log errors if any
				console.log(err);
			});
	}
}
