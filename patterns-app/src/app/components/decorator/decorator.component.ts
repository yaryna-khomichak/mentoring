import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.scss']
})
export class DecoratorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    class Tea {
      cost() {
        return 5;
      }
    }

    function sugar(tea) {
      const cost = tea.cost();
      tea.cost = () => cost + 1;
    }

    function honey(tea) {
      const cost = tea.cost();
      tea.cost = () => cost + 2;
    }

    function ment(tea) {
      const cost = tea.cost();
      tea.cost = () => cost + 2.5;
    }

    const tea = new Tea();
    honey(tea);
    ment(tea);
    console.log(tea.cost());
  }

}
