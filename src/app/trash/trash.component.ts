import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'toastr-ng2';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

import { GmailService } from '../service/gmail.service';
import { Email } from '../models/email';
import { contentHeaders } from '../common/headers';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent{

	emails: Email[];
	constructor(private gmailService: GmailService, public http: Http,private toastrService: ToastrService, public router: Router) {
		this.gmailService.trash()
		.subscribe(
			emails => this.emails = emails, //Bind to view
			err => {
				// Log errors if any
				console.log(err);
			});
	}
	recoverMail(email_id) {
		var token = localStorage.getItem('auth_token');
		let body = JSON.stringify({email_id: email_id})
		this.http.post('http://localhost:3000/email/recover_mail?token='+token, body, { headers: contentHeaders })
		.subscribe(
			response => {
				console.log('recovermail success response');
				console.log(response);
				if(response.json().success == true) {
					this.toastrService.success(response.json().info);
				}
				location.reload();
			},
			error => {
				console.log(error.text());
			}
		);
	}
}
