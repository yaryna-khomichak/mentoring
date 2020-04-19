import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { PaymentMethod } from '../models/paymnet-method.enum';

@Injectable({
    providedIn: 'root',
})
export class StrategyService {
    private readonly strategy$: BehaviorSubject<PaymentMethod> = new BehaviorSubject(undefined);
    private readonly paymentMethodMessage: Record<PaymentMethod, string> = {
        [PaymentMethod.Visa]: 'You are going to pay by Visa!',
        [PaymentMethod.PayPal]: 'You are going to pay by PayPal!',
        [PaymentMethod.MasterCard]: 'You are going to pay by MasterCard!',
    };

    public constructor() { }

    /**
     * Sets selected strategy
     */
    public setStrategy(type: PaymentMethod): void {
        this.strategy$.next(type);
    }

    /**
     * Gets selected strategy
     */
    public getStrategy(): Observable<PaymentMethod> {
        return this.strategy$;
    }

    /**
     * Gets payment methods
     */
    public getPaymentMethods(): Observable<PaymentMethod[]> {
        return of([...Object.values(PaymentMethod)]);
    }

    /**
     * Gets payment method message
     */
    public getPaymentMethodMessage(): Observable<string> {
        return this.strategy$
            .pipe(
                map((strategy) => {
                    return this.paymentMethodMessage[strategy];
                })
            );
    }
}
