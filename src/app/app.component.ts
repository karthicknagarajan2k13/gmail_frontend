import { Component } from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';

import { Email } from './models/email';
import { GmailMails } from './providers/gmail-mail';
import { InboxComponent } from './inbox/inbox.component';
import { SentMailComponent } from './sent-mail/sent-mail.component';
import { StarredComponent } from './starred/starred.component';
import { TrashComponent } from './trash/trash.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [ ROUTER_DIRECTIVES ]
})
@Routes([
  {path: '/',            component: AppComponent },
  {path: '/inbox',       component: InboxComponent },
  {path: '/sent-mail',   component: SentMailComponent },
  {path: '/starred',     component: StarredComponent },
  {path: '/trash',       component: TrashComponent },
  {path: '/*',           component: AppComponent }
])
export class AppComponent {
  emails: Email[];
  constructor(private gmailMails: GmailMails) {
    gmailMails.load().subscribe(emails => {
      this.emails = emails;
      console.log(emails);
    })
  }
}
