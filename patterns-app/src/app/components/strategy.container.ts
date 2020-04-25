import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StrategyService } from '../services/strategy.service';
import { PaymentMethod } from '../models/paymnet-method.enum';

@Component({
	selector: 'app-strategy-continer',
	template: `<app-strategy
    [strategy]="strategy$ | async"
    [paymentMethods]="paymentMethods$ | async"
    [paymentMethodMessage]="paymentMethodMessage$ | async"
    (setSelectedStrategy)="setSelectedStrategy($event)"
  ></app-strategy>`
})
export class StrategyContainerComponent {
	public strategy$: Observable<PaymentMethod>;
	public paymentMethods$: Observable<PaymentMethod[]>;
	public paymentMethodMessage$: Observable<string>;

	constructor(public strategyService: StrategyService) {
		this.strategy$ = this.strategyService.getStrategy();
		this.paymentMethods$ = this.strategyService.getPaymentMethods();
		this.paymentMethodMessage$ = this.strategyService.getPaymentMethodMessage();
	}

	public setSelectedStrategy(strategy: PaymentMethod): void {
		this.strategyService.setStrategy(strategy);
	}
}
