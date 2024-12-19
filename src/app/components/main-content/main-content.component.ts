import { Component } from '@angular/core';
import { WeatherService } from '../../service/weather.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {
  weatherDetailsTemp: string = '';
  weatherDetailsName: string = '';
  weatherDetailsCountry: string = '';
  weatherDetailsDescription: string = '';
  weatherDetailsIcon: string = '';
  city: string = '';

  constructor(private weatherService: WeatherService) {}

  searchWeather = () => {
    if (this.city.trim()) {
      this.weatherService.getWeather(this.city).subscribe((results) => {
        console.log(results);

        this.weatherDetailsTemp = (results.main.temp - 273.15).toFixed(0);
        this.weatherDetailsName = results.name;
        this.weatherDetailsCountry = results.sys.country;
        this.weatherDetailsDescription = results.weather[0].description;
        this.weatherDetailsIcon = results.weather[0].icon;
      });
    } else {
      alert('Please enter a city name');
    }
  };

  onEnterPress = () => {
    this.searchWeather();
    this.city = '';
  };
};
