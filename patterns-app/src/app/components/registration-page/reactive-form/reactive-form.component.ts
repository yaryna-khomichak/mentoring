import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrationPageService } from 'src/app/services/registration-page.service';
import { UserData } from 'src/app/models/user-data.class';

@Component({
	selector: 'app-reactive-form',
	templateUrl: './reactive-form.component.html',
	styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
	public myForm: FormGroup = new FormGroup({
		email: new FormControl('', [
			Validators.required,
			Validators.email
		]),
		password: new FormControl('', Validators.required),
		firstName: new FormControl('', Validators.required),
		lastName: new FormControl('', Validators.required)
	});

	constructor(private registrationPageService: RegistrationPageService) { }

	public addUser() {
		this.registrationPageService.addUser(
			new UserData(this.myForm.value.email, this.myForm.value.password, this.myForm.value.firstName, this.myForm.value.lastName));
	}

	public onSubmit() {}
}
