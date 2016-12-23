import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'toastr-ng2';

import { GmailService } from '../service/gmail.service';
import { Email } from '../models/email';

@Component({
  selector: 'app-starred',
  templateUrl: './starred.component.html',
  styleUrls: ['./starred.component.css']
})
export class StarredComponent{
	emails: Email[];
	constructor(private gmailService: GmailService) {
		this.gmailService.starred()
		.subscribe(
			emails => this.emails = emails, //Bind to view
			err => {
				// Log errors if any
				console.log(err);
			});
	}
}
