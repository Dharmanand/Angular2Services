import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import {WeatherListComponent} from './servicdes/weather.list.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, WeatherListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
