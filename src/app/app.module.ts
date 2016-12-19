import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GmailMails } from './providers/gmail-mail';
import { InboxComponent } from './inbox/inbox.component';
import { StarredComponent } from './starred/starred.component';
import { SentMailComponent } from './sent-mail/sent-mail.component';
import { TrashComponent } from './trash/trash.component';
import { routes } from './app.routes';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    InboxComponent,
    StarredComponent,
    SentMailComponent,
    TrashComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [GmailMails],
  bootstrap: [AppComponent]
})
export class AppModule { }
