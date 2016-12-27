import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { ToastrService } from 'toastr-ng2';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-email-detail',
  templateUrl: './email-detail.component.html',
  styleUrls: ['./email-detail.component.css']
})
export class EmailDetailComponent{
	private sub: any;

	private emailId: number;
	private to: string;
	private subject: string;
	private message: string;
	private user_name: string;

	constructor(private toastrService: ToastrService,private route: ActivatedRoute,public http: Http) { }

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.emailId = +params["id"];
			console.log(this.emailId);
		});
		var token = localStorage.getItem('auth_token');
		this.http.get(`http://localhost:3000/email/sent_mail/`+this.emailId+'?token='+token)
		.subscribe(
	      	response => {
		      	var email = response.json();
		        this.user_name =  email.email.user_name;
		        this.message =  email.email.message;
		        this.to = email.email.to;
		        this.subject = email.email.subject;
	      	},
	      	error => {
	        	console.log(error.text());
	      	}
    	);
	}
}
