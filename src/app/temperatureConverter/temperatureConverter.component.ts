import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss']
})

export class TemperatureConverter implements OnInit {
  celsius = null;
  fahrenheit = null;

  ngOnInit() {
    // C = (F − 32) × 5/9
    // F = C*9/5 + 32
  }

  updateCelsius(value: number) {
    this.celsius = value;
    this.fahrenheit = value *9/5 + 32;
  }

  updateFahrenheit(value: number) {
    this.fahrenheit = value;
    this.celsius = (value - 32) * 5/9;
  }

}