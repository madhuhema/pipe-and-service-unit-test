import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NumberToWeatherPipe } from './number-to-weather.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NumberToWeatherPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
