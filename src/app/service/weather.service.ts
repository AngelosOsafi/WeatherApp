import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = 'be42c56a8ab86e4455ae85bba9498483';
  constructor(private httpClient: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`;
    return this.httpClient.get<any>(url);
  }
}
