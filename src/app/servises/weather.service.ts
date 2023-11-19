import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = environment.watherApiBaseUrl;

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string){
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': environment.XRapidAPIkeyHeaderValue,
      'X-RapidAPI-Host': environment.XRapidAPIhostHeaderValue
    });

    const params = new HttpParams().set('q', cityName);

    return this.http.get(this.apiUrl, { headers, params });
  }
}

 
