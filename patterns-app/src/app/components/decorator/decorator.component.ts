import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.scss']
})
export class DecoratorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // class Tea {
    //   cost() {
    //     return 5;
    //   }
    // }

    // function sugar(tea) {
    //   const cost = tea.cost();
    //   tea.cost = () => cost + 1;
    // }

    // function honey(tea) {
    //   const cost = tea.cost();
    //   tea.cost = () => cost + 2;
    // }

    // function ment(tea) {
    //   const cost = tea.cost();
    //   tea.cost = () => cost + 2.5;
    // }

    // const tea = new Tea();
    // honey(tea);
    // ment(tea);
    // console.log(tea.cost());

    function extraInfo(target: any) {
      console.log('We decorated: ', target);
    }

    @extraInfo
    class User {
      name: string;
      age: number;
      constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
      }
    }

    const bob = new User('Bob', 20);
    console.log(bob);
  }

}
