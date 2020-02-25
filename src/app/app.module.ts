import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app-routing-module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NewPageComponent } from './new-page/new-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NewPageComponent,
    HomePageComponent,
    FirstPageComponent,
    SecondPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





