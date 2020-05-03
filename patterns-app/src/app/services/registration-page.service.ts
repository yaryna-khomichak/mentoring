import { Injectable } from '@angular/core';
import { UserData } from '../models/user-data.class';

@Injectable({
	providedIn: 'root',
})
export class RegistrationPageService {
	public users: UserData[] = [];

	constructor() { }

	public addUser(user) {
		this.users.push(user);
		console.log(this.users);
	}
}
