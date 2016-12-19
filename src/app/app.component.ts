import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Email } from './models/email';
import { GmailMails } from './providers/gmail-mail';
import { InboxComponent } from './inbox/inbox.component';
import { SentMailComponent } from './sent-mail/sent-mail.component';
import { StarredComponent } from './starred/starred.component';
import { TrashComponent } from './trash/trash.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  emails: Email[];
  constructor(private gmailMails: GmailMails) {
    gmailMails.load().subscribe(emails => {
      this.emails = emails;
      console.log(emails);
    })
  }
}
