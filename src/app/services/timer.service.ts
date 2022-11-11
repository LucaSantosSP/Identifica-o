import { Injectable, Input } from '@angular/core';

@Injectable()
export class TimerService {
  private timer: any;
  private counter: number = 0;
  @Input() valor: Number;

  constructor() {
    this.timer = setInterval(() => {
      this.counter++;
      if (this.counter > this.valor) {
        this.counter = 0;
      }
      if (this.counter <= this.valor) {
      }
    }, 1000);
  }
  getCounter() {
    return this.counter;
  }
}
