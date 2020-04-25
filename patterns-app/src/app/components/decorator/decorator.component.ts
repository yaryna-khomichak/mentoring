import { Component, OnInit } from '@angular/core';
import { enumerable, log } from './decorators';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
})
export class DecoratorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    class User {
      name: string;
      age: number;
      constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
      }

      @enumerable(false)
      greeting() {
        return `My name is ${this.name}`;
      }

      @log
      sayHelloTo(personName: string) {
        return `Hello, ${personName}!`;
      }
    }

    const Bob = new User('Bob', 20);
    // tslint:disable-next-line: forin
    for (const key in Bob) {
      console.log(`key: ${key}`);
    }
    Bob.sayHelloTo('Ted');
  }
}
