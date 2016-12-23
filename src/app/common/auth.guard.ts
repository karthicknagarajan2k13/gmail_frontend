import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
  	console.log('i am checking to see if you are logged in');
  	return true;
  }

  canActivateChild() {
  	console.log('checking child route access');
  	return true;
  }

  // canActivate() {
  //   if (tokenNotExpired()) {
  //     return true;
  //   }

  //   this.router.navigate(['login']);
  //   return false;
  // }
}
