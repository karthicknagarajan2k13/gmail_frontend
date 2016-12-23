import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { User } from '../models/user';

@Injectable()
export class UserService {
  gmailUrl = 'http://localhost:3000';
  constructor(public http: Http){}
  getUser(): Observable<User[]> {
  	var token = localStorage.getItem('auth_token');
  	return this.http.get(`${this.gmailUrl}/email/users?token=`+token)
  	.map((res:Response) => res.json().users)
  	.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  } 
}