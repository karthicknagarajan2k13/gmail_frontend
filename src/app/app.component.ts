import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

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
  emails: Email[];
  constructor(private gmailService: GmailService) {
    this.gmailService.load()
    .subscribe(
      emails => this.emails = emails, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
  }
}


