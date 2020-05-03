import { Component } from '@angular/core';
import { RegistrationPageService } from 'src/app/services/registration-page.service';
import { UserData } from 'src/app/models/user-data.class';

@Component({
	selector: 'app-template-driven-form',
	templateUrl: './template-driven-form.component.html',
	styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {
	public user: UserData = new UserData('', '', '', '');

	constructor(private registrationPageService: RegistrationPageService) { }

	public addUser() {
		this.registrationPageService.addUser(
			new UserData(this.user.email, this.user.password, this.user.firstName, this.user.lastName)
		);
	}

	public onSubmit() {}
}
