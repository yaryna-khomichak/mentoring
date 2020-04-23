import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facade',
  templateUrl: './facade.component.html',
})
export class FacadeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    class Bank {
      verify(amount: number) {
        return amount < 10000 ? 'approved' : 'denied';
      }
    }

    class CreditAvailability {
      check(age: number, income: number) {
        return (age >= 18 && income >= 1000)
          ? 'available'
          : 'not available';
      }
    }

    class Credit {
      name: string;
      age: number;
      income: number;
      constructor(name: string, age: number, income: number) {
        this.name = name;
        this.age = age;
      }

      applyFor(amount: number) {
        const bankResult = new Bank().verify(amount);
        const creditAvailability = new CreditAvailability().check(this.age, this.income);

        return `The bank ${bankResult} a ${amount}$ loan. \nCredit is ${creditAvailability} for ${this.name}.`;
      }
    }

    const user = new Credit('John', 20, 1500);
    const credit = user.applyFor(5000);
    console.log(credit);
  }

}
