import { signal } from "@angular/core";

export class CounterLogic {
  counter: number = 20;
  counterSignal = signal(10);

  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }

  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update(current => current + value);
  }

  decreaseBy(value: number) {
    this.counter -= value;
    this.counterSignal.update(current => current - value);
  }
}
