import { Component, Input } from '@angular/core';
import { FruitData } from 'src/app/models/fruit-data.model';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent {
  @Input() public fruitsData: FruitData[];
}
