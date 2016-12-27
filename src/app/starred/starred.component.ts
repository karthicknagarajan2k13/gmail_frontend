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
  selector: 'app-starred',
  templateUrl: './starred.component.html',
  styleUrls: ['./starred.component.css']
})
export class StarredComponent{
	emails: Email[];
	constructor(private gmailService: GmailService, public http: Http,private toastrService: ToastrService, public router: Router) {
		this.gmailService.starred()
		.subscribe(
			emails => this.emails = emails, //Bind to view
			err => {
				// Log errors if any
				console.log(err);
			});
	}
	starMail(email_id) {
	var token = localStorage.getItem('auth_token');
    let body = JSON.stringify({email_id: email_id})
    this.http.post('http://localhost:3000/email/starred_mail?token='+token, body, { headers: contentHeaders })
	    .subscribe(
	      response => {
	        console.log('starmail success response');
	        console.log(response);
	        if(response.json().success == true) {
	        	if (response.json().email.is_active == true){
	        		this.toastrService.success('Added to Starred');
	        	}
	        	else{
	        		this.toastrService.success('Removed to Starred');	
	        	}
	        	location.reload();
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
