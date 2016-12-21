import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Email } from '../models/email';

@Injectable()
export class GmailMails {
  gmailUrl = 'http://localhost:3000';

  constructor(public http: Http) { }

  // Load all gmail mails
  load(): Observable<Email[]> {
    return this.http.get(`${this.gmailUrl}/email/sent_mail`)
      .map((res:Response) => res.json())
  	.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  	}   
}