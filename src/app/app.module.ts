import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CountdownModule } from 'ngx-countdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './brew/timer/timer.component';
import { BrewComponent } from './brew/brew.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    BrewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
