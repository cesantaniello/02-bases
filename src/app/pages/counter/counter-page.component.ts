import { Component } from '@angular/core';
import { CounterLogic } from './app.templateUrl';

@Component({
  //selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.styles.css']
})

export class CounterPageComponent extends CounterLogic {}
