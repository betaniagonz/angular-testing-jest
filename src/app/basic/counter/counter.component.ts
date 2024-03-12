import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {

  counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
    //TODO:
    //console.log({ newValue: this.counter });
  }

}
