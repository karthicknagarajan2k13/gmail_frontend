import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'toastr-ng2';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

import { GmailService } from '../service/gmail.service';
import { UserService } from '../service/user.service';
import { Email } from '../models/email';
import { User } from '../models/user';
import { contentHeaders } from '../common/headers';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent {
	emails: Email[];
	users: User[];
	constructor(private gmailService: GmailService, public http: Http,private userService: UserService,private toastrService: ToastrService, public router: Router) {
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
	starMail(email_id) {
    let body = JSON.stringify({email_id: email_id})
    this.http.post('http://localhost:3000/email/starred_mail', body, { headers: contentHeaders })
	    .subscribe(
	      response => {
	        console.log('starmail success response');
	        console.log(response.json());
	        console.log(response.json().email.is_active);
	        if(response.json().success == true) {
	        	if (response.json().email.is_active == true){
	        		this.toastrService.success('Added to Starred');
	        	}
	        	else{
	        		this.toastrService.success('Removed to Starred');	
	        	}
	        }
	      },
	      error => {
	        console.log(error.text());
	      }
	    );
  	}
  	getStyle(email){
  		if(email.is_active == true) {
  			return 'yellow';
  		}
  		else{
  			return'white'
  		}
  	}
}
