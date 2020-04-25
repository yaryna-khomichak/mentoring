import { Component, Input } from '@angular/core';
import { FruitData } from 'src/app/models/fruit-data.interface';

@Component({
	selector: 'app-observable',
	templateUrl: './observable.component.html',
	styleUrls: ['./observable.component.scss']
})
export class ObservableComponent {
	@Input() public fruitsData: FruitData[];
}
