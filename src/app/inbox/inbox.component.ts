import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'toastr-ng2';


@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent {
	constructor(private toastrService: ToastrService) {}

	showSuccess() {
		this.toastrService.success('Hello world!', 'Toastr fun!');
	}
}
