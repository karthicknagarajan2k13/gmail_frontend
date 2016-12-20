import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { contentHeaders } from '../common/headers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
	constructor(public router: Router, public http: Http) {}

	login(event, email, password) {
		event.preventDefault();
		let body = JSON.stringify({ email, password });
		this.http.post('http://localhost:3000/users/sign_in', body, { headers: contentHeaders })
		.subscribe(
			response => {
				localStorage.setItem('id_token', response.json().id_token);
				this.router.navigate(['inbox']);
			},
			error => {
				alert(error.text());
				console.log(error.text());
			}
		);
	}
	signup(event) {
    event.preventDefault();
    this.router.navigate(['registration']);
  }
}
