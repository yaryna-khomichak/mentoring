import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import { RandomUserResponse, User } from '../models/user.interface';
import { Pagination } from '../models/pagination.interface';

@Injectable({
	providedIn: 'root',
})
export class UserFacade {
	private readonly searchText: BehaviorSubject<string> = new BehaviorSubject('');
	public pagination: Pagination = {
		selectedSize: undefined,
		tableSize: [5, 10, 20, 50]
	};

	constructor(private http: HttpClient) { }

	findAllUsers(): Observable<User[]> {
		const url = buildUserUrl(this.pagination);
		const request$ = this.http.get<RandomUserResponse>(url).pipe(
			map(response => response.results),
		);

		return combineLatest([
			request$,
			this.searchText,
		]).pipe(
			debounceTime(100),
			map(([data, searchTerms]) => {
				return data.filter((el) =>
					el.name.last
						.toLowerCase().includes(searchTerms.toLowerCase().trim()));
			})
		);
	}

	updatePagination(selectedSize: number) {
		this.pagination = {
			...this.pagination,
			selectedSize,
		};
	}

	updateSearchText(searchText: string) {
		this.searchText.next(searchText);
	}
}

function buildUserUrl(pagination: Pagination): string {
	const URL = 'https://randomuser.me/api/';
	const pageSize = `results=${pagination.selectedSize}&`;

	return `${URL}?&${pageSize}`;
}
