import { Component } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { ToastrService } from 'toastr-ng2';

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
  constructor(private toastrService: ToastrService,public router: Router) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }
  tokenCheck(){
    console.log('common method called!')
  }

  mailCompose(){
    this.toastrService.success('compose clicked');
    this.email_compose = true;
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
    this.router.navigate(['login']);
  }

}


