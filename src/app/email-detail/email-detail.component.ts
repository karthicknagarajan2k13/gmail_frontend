import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { ToastrService } from 'toastr-ng2';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Email } from '../models/email';

@Component({
  selector: 'app-email-detail',
  templateUrl: './email-detail.component.html',
  styleUrls: ['./email-detail.component.css']
})
export class EmailDetailComponent{
	private sub: any;

	private emailId: number;

	email:Email[]

	constructor(private toastrService: ToastrService,private route: ActivatedRoute,public http: Http) { }

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.emailId = +params["id"];
			console.log(this.emailId);
		});
		this.http.get(`http://localhost:3000/email/sent_mail/`+this.emailId)
		.subscribe(
      response => {
      	this.email = response.json().email;
        console.log(response.json().email);
      },
      error => {
        console.log(error.text());
      }
    );
	}
}
