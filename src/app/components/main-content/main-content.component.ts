import { Component } from '@angular/core';
import { WeatherService } from '../../service/weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {
  weatherDetailsTemp: string = '';
  weatherDetailsName: string = '';
  weatherDetailsCountry: string = '';
  weatherDetailsDescription: string = '';
  weatherIconCode: string = '';
  weatherDetailsIcon: string = '';
  city: string = '';
  currentDateTime: string = '';

  constructor(private weatherService: WeatherService) {}

  searchWeather = () => {
    if (this.city.trim()) {
      this.weatherService.getWeather(this.city).subscribe((results) => {
        this.city = '';

        this.weatherDetailsTemp = (results.main.temp - 273.15).toFixed(0);
        this.weatherDetailsName = results.name;
        this.weatherDetailsCountry = results.sys.country;
        this.weatherDetailsDescription = results.weather[0].description;
        this.weatherIconCode = results.weather[0].icon;
        this.weatherDetailsIcon = `https://openweathermap.org/img/wn/${this.weatherIconCode}@2x.png`;
        const now = new Date();
        this.currentDateTime = now.toLocaleString();
      });
    } else {
      alert('Please enter a city name');
    }
  };

  onEnterPress = () => {
    this.searchWeather();
    this.city = '';
  };
}
