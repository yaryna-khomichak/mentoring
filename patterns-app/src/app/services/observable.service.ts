import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FRUITS_DATA } from '../mocks/data';
import { FruitData } from '../models/fruit-data.interface';

@Injectable({
	providedIn: 'root',
})
export class ObservableService {
	private readonly fruitsData$: Observable<FruitData[]>;

	public constructor() {
		this.fruitsData$ = of(FRUITS_DATA);
	}

	/**
	 * Gets fruits data
	 */
	public getFruitsData(): Observable<FruitData[]> {
		return this.fruitsData$;
	}
}
