import {Injectable} from '@angular/core';
import {WeatherData} from './weather.data';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService{

    constructor(private _http: Http){

    }

    getWeatherData(): Observable<WeatherData>{
        return this._http.get("http://api.openweathermap.org/data/2.5/weather?q=Bangalore&appid=KEY&units=metric")
                            .map((response: Response) => <WeatherData>response.json());
    }
}