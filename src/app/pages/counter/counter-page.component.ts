import { Component } from "@angular/core";

@Component({
  template: `
    <h2>Counter: {{ counter }}</h2>
    <button (click)="increaseBy(1)">+1</button>
  `
})

export class CounterPageComponent {
  counter: number = 20;

  increaseBy(value: number) {
    this.counter += value;
  }
}
