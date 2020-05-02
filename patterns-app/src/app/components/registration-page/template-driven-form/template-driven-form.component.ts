import { Component, OnInit } from '@angular/core';
import { RegistrationPageService } from 'src/app/services/registration-page.service';

@Component({
	selector: 'app-template-driven-form',
	templateUrl: './template-driven-form.component.html',
	styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

	constructor(private registrationPageService: RegistrationPageService) { }

	ngOnInit() {
	}

	public addUser(user) {
		this.registrationPageService.addUser(user);
	}

	public onSubmit() {}
}
