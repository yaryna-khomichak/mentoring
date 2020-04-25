import { Component } from '@angular/core';
import { ObservableService } from 'src/app/services/observable.service';
import { Observable } from 'rxjs';
import { FruitData } from 'src/app/models/fruit-data.interface';

@Component({
	selector: 'app-observable-continer',
	template: `<app-observable
    [fruitsData]="fruitsData$ | async"
  ></app-observable>`
})
export class ObservableContainerComponent {
	public fruitsData$: Observable<FruitData[]>;

	constructor(public observableService: ObservableService) {
		this.fruitsData$ = this.observableService.getFruitsData();
	}
}
