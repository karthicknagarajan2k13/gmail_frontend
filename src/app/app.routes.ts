import { InboxComponent } from './inbox/inbox.component';
import { SentMailComponent } from './sent-mail/sent-mail.component';
import { StarredComponent } from './starred/starred.component';
import { TrashComponent } from './trash/trash.component';

import { provideRouter } from '@angular/router';

const APP_ROUTES = [
	{path: '',            component: AppComponent },
	{path: 'inbox',       component: InboxComponent },
	{path: 'sent-mail',   component: SentMailComponent },
	{path: 'starred',     component: StarredComponent },
	{path: 'trash',       component: TrashComponent }
];

export const APP_ROUTES_PROVIDER = [
	provideRouter(APP_ROUTES);
];