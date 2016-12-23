import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { InboxComponent } from './inbox/inbox.component';
import { SentMailComponent } from './sent-mail/sent-mail.component';
import { StarredComponent } from './starred/starred.component';
import { TrashComponent } from './trash/trash.component';
import { AuthGuard } from './common/auth.guard';

export const routes: Routes = [
	{path: '', redirectTo: 'login', pathMatch: 'full' },
	{path: 'registration', component: RegistrationComponent },
	{path: 'login',        component: LoginComponent },
	{path: 'inbox',        component: InboxComponent },
	{path: 'sent-mail',    component: SentMailComponent },
	{path: 'starred',      component: StarredComponent },
	{path: 'trash',        component: TrashComponent },
	{path: '**',redirectTo:'login'}
];