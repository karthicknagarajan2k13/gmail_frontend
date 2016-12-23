import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'toastr-ng2';

import { GmailService } from '../service/gmail.service';
import { UserService } from '../service/user.service';
import { Email } from '../models/email';
import { User } from '../models/user';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent {
	emails: Email[];
	users: User[];
	constructor(private gmailService: GmailService,private userService: UserService) {
		this.gmailService.inbox()
		.subscribe(
			emails => this.emails = emails, //Bind to view
			err => {
				// Log errors if any
				console.log(err);
		});
		this.userService.getUser()
		.subscribe(
			users => this.users = users, //Bind to view
			err => {
				// Log errors if any
				console.log(err);
		});
	}
}
