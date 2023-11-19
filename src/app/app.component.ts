import { Component } from '@angular/core';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faWind, faCloud, faSmog, faSun, faWater, faTemperature1, faTemperature4, faCloudRain, faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from './servises/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WeatherApp';
  cityName: string = 'Barcelona';

  faFacebook  = faFacebook ;
  faTwitter  = faTwitter ;
  faInstagram  = faInstagram ;
  faMagnifyingGlass  = faMagnifyingGlass ;
  faSnowflake =faSnowflake;
  faWind  = faWind ;
  faCloud  = faCloud ;
  faSun  = faSun ;
  faWater  = faWater ;
  faTemperature1  = faTemperature1 ;
  faTemperature4  = faTemperature4 ;
  faCloudRain  = faCloudRain ;
  faSmog  = faSmog ;

  weatherData: any;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName_: string){
    const cityName = cityName_; 
    this.weatherService.getWeatherData(cityName).subscribe(
      (data: any) => {
        this.weatherData = data;
        console.log(data); 
      }
    );
  }

}
