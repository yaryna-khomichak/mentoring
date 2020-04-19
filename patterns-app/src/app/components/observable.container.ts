import { Component } from '@angular/core';
import { ObservableService } from 'src/app/services/observable.service';
import { Observable, of } from 'rxjs';
import { FruitData } from 'src/app/models/fruit-data.model';

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
