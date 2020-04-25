import { Component } from '@angular/core';
import { UserFacade } from 'src/app/services/facade.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.interface';

@Component({
	selector: 'app-facade',
	templateUrl: './facade.component.html',
})
export class FacadeComponent {
	public pagination = this.users.pagination;
	public users$: Observable<User[]>;

	constructor(public users: UserFacade) { }

	public searchText(searchText: string) {
		this.users.updateSearchText(searchText);
	}

	updatePagination(pageSize: number) {
		this.users.updatePagination(pageSize);
		this.pagination = this.users.pagination;
		this.users$ = this.users.findAllUsers();
	}
}
