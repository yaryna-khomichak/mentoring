import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RegistrationPageService } from 'src/app/services/registration-page.service';
import { UserData } from 'src/app/models/user-data.class';

@Component({
	selector: 'app-reactive-form',
	templateUrl: './reactive-form.component.html',
	styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
	// public myForm: FormGroup = new FormGroup({
	// 	email: new FormControl('', [
	// 		Validators.required,
	// 		Validators.email
	// 	]),
	// 	password: new FormControl('', Validators.required),
	// 	firstName: new FormControl('', Validators.required),
	// 	lastName: new FormControl('', Validators.required)
	// });
	public myForm: FormGroup;

	constructor(
		private registrationPageService: RegistrationPageService,
		private formBuilder: FormBuilder) {
		this.myForm = formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required]],
			firstName: ['', [Validators.required]],
			lastName: ['', Validators.required],
		});
	}

	public addUser() {
		this.registrationPageService.addUser(
			new UserData(this.myForm.value.email, this.myForm.value.password, this.myForm.value.firstName, this.myForm.value.lastName));
	}

	public onSubmit() { }
}
