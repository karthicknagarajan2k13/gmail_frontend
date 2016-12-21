import { Headers } from '@angular/http';

export const contentHeaders = new Headers();
contentHeaders.append('Access-Control-Allow-Origin', '*');
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');
contentHeaders.append('Access-Control-Allow-Methods', 'POST, PUT, DELETE, GET');
contentHeaders.append('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');