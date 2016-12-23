import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'toastr-ng2';

import { AppComponent } from './app.component';
import { GmailService } from './service/gmail.service';
import { UserService } from './service/user.service';
import { InboxComponent } from './inbox/inbox.component';
import { StarredComponent } from './starred/starred.component';
import { SentMailComponent } from './sent-mail/sent-mail.component';
import { TrashComponent } from './trash/trash.component';
import { routes } from './app.routes';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { EmailDetailComponent } from './email-detail/email-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    InboxComponent,
    StarredComponent,
    SentMailComponent,
    TrashComponent,
    LoginComponent,
    RegistrationComponent,
    EmailDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot()
  ],
  providers: [GmailService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
