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

  updateCelsius(value) {
    console.log(value.target.value)
    this.celsius = value.target.value;
    this.fahrenheit = this.celsius *9/5 + 32;
  }

  updateFahrenheit(value) {
    this.fahrenheit = value.target.value;
    this.celsius = (this.fahrenheit - 32) * 5/9;
  }

}