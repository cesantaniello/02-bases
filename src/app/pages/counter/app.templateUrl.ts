export class CounterLogic {
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
