import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { InboxComponent } from './inbox/inbox.component';
import { SentMailComponent } from './sent-mail/sent-mail.component';
import { StarredComponent } from './starred/starred.component';
import { TrashComponent } from './trash/trash.component';

export const routes: Routes = [
	{path: '',       component: InboxComponent },
	{path: 'registration', component: RegistrationComponent },
	{path: 'login',        component: LoginComponent },
	{path: 'inbox',        component: InboxComponent },
	{path: 'sent-mail',    component: SentMailComponent },
	{path: 'starred',      component: StarredComponent },
	{path: 'trash',        component: TrashComponent }
];