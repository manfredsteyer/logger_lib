import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LoggerModule } from '@my/logger-lib';
import { CustomLogFormatter } from './custom-log-formatter';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoggerModule.forRoot({enableDebug: true}, CustomLogFormatter)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
