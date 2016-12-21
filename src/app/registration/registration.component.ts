import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { contentHeaders } from '../common/headers';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
	constructor(public router: Router, public http: Http) {}

	register(event, name, email, password, password_conformation) {
		event.preventDefault();
		let body = JSON.stringify({user: {name: name, email: email, password: password, password_conformation: password_conformation }})
		console.log("body");
		console.log(body);
		this.http.post('http://localhost:3000/users', body, { headers: contentHeaders })
		.subscribe(
			response => {
				console.log('register success response');
				console.log(response);
				console.log('TOKEN');
				console.log(response.json().data.auth_token);
				localStorage.setItem('auth_token', response.json().data.auth_token);
				this.router.navigate(['inbox']);
			},
			error => {
				console.log(error.text());
			}
		);
	}
}
