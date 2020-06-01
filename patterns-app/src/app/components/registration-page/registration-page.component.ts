import { Component, OnInit } from '@angular/core';
import { ComponentCanDeactivate } from 'src/app/guards/exit-registration.guard';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-registration-page',
	templateUrl: './registration-page.component.html',
	styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements ComponentCanDeactivate {
	public saved: boolean = false;
	public save(): void {
		this.saved = true;
	}

	canDeactivate(): boolean | Observable<boolean> {
		if (!this.saved) {
			return confirm('Unsaved data detected. Want to exit?');
		} else {
			return true;
		}
	}
}
