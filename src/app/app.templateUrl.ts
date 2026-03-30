import { Component } from "@angular/core";

@Component({
  template: `
  <h2>Counter: {{ counter }}</h2>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="decreaseBy(1)">-1</button>
  <button (click)="resetCounter()">Reset</button>
  `
})

export class CounterPageComponent {
  counter: number = 20;

  resetCounter() {
    this.counter = 0;
  }

  increaseBy(value: number) {
    this.counter += value;
  }

  decreaseBy(value: number) {
    this.counter -= value;
  }
}
