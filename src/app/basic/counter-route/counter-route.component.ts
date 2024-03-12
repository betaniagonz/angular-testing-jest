import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-counter-route',
  templateUrl: './counter-route.component.html',
})
export class CounterRouteComponent implements OnInit{
  private route = inject(ActivatedRoute);
  counter: number = 10;

  ngOnInit(): void {
    const initial = Number(this.route.snapshot.paramMap.get('initial'));
    this.counter = isNaN(initial) ? 10 : initial;
  }

  increaseBy(value: number): void {
    this.counter += value;
    //TODO:
    //console.log({ newValue: this.counter });
  }
}
