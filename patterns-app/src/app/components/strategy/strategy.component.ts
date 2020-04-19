import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PaymentMethod } from 'src/app/models/paymnet-method.enum';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.scss']
})
export class StrategyComponent {
  @Input() strategy: PaymentMethod;
  @Input() paymentMethods: PaymentMethod[];
  @Input() paymentMethodMessage: string;

  @Output() public setSelectedStrategy: EventEmitter<PaymentMethod>  = new EventEmitter();

  public setStrategy(strategy: PaymentMethod): void {
    this.setSelectedStrategy.emit(strategy);
  }
}
