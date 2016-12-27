import { Component } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { ToastrService } from 'toastr-ng2';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Email } from './models/email';
import { GmailService } from './service/gmail.service';
import { InboxComponent } from './inbox/inbox.component';
import { SentMailComponent } from './sent-mail/sent-mail.component';
import { StarredComponent } from './starred/starred.component';
import { TrashComponent } from './trash/trash.component';

import { contentHeaders } from './common/headers';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public email_compose = false;
  private loggedIn = false;
  constructor(private toastrService: ToastrService, public http: Http,public router: Router) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }
  tokenCheck(){
    console.log('common method called!')
  }

  mailCompose(){
    this.email_compose = true;
  }

  closeMailcompose(){
    this.email_compose = false;
  }

  composeMail(event, to, subject, message) {
    var token = localStorage.getItem('auth_token');
    event.preventDefault();
    let body = JSON.stringify({email: {to: to, subject: subject, message: message}})
    this.http.post('http://localhost:3000/email/compose?token='+token, body, { headers: contentHeaders })
    .subscribe(
      response => {
        console.log('compose success response');
        console.log(response);
        if(response.json().success == true) {
          this.toastrService.success('Email successfully created');
        }
        location.reload();
      },
      error => {
        console.log(error.text());
        this.toastrService.error(error.text());
      }
    );
  }

  logout() {
    this.http.delete('http://localhost:3000/users/sign_out', {})
    .subscribe(
      response => {
        console.log(response);
        if(response.json().success == true) {
          localStorage.removeItem('auth_token');
          this.loggedIn = false;
          this.router.navigate(['login']);
          this.toastrService.success(response.json().data);
        }
      },
      error => {
        console.log(error.text());
        this.toastrService.error(error.text());
      }
    );
  }

}


