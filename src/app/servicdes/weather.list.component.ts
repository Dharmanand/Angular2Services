import {Component, OnInit} from '@angular/core';
import {WeatherData} from './weather.data';
import {WeatherService} from './weather.service';

@Component({

    selector:'weather-list',
    template: `
            <div *ngIf="weatherData">
                <span>weatherData: {{weatherData}}</span><br/>
                <span>City Name: {{weatherData.name}}</span><br/>
                <span>Description: {{weatherData.weather[0].main}}</span><br/>
                <span>Temparature: {{weatherData.main.temp}}°C</span>
            </div>
    `,
    providers: [WeatherService]

})

export class WeatherListComponent implements OnInit{

    weatherData: any;

    constructor(private _weatherService: WeatherService){

    }

    ngOnInit(){
            this._weatherService.getWeatherData().subscribe((wData: any) => this.weatherData = wData);
    }

}