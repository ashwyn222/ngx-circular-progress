import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxCircularProgressModule } from 'projects/ngx-circular-progress/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxCircularProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
