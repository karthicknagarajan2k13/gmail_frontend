import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Email } from '../models/email';

@Injectable()
export class GmailService {
  gmailUrl = 'http://localhost:3000';

  constructor(public http: Http) { }
	// Load all gmail mails
	sentMail(): Observable<Email[]> {
		var token = localStorage.getItem('auth_token');
		return this.http.get(`${this.gmailUrl}/email/sent_mail?token=`+token)
		.map((res:Response) => res.json().emails)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	} 
	inbox(): Observable<Email[]> {
		var token = localStorage.getItem('auth_token');
		return this.http.get(`${this.gmailUrl}/email/inbox?token=`+token)
		.map((res:Response) => res.json().emails)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	starred(): Observable<Email[]> {
		var token = localStorage.getItem('auth_token');
		return this.http.get(`${this.gmailUrl}/email/starred?token=`+token)
		.map((res:Response) => res.json().emails)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	} 
	trash(): Observable<Email[]> {
		var token = localStorage.getItem('auth_token');
		return this.http.get(`${this.gmailUrl}/email/trash?token=`+token)
		.map((res:Response) => res.json().emails)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
}