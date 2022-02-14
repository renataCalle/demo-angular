import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';
import { Cannabinoid1Component } from './cannabinoid1/cannabinoid1.component';
import { Cannabinoid2Component } from './cannabinoid2/cannabinoid2.component';


@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    Cannabinoid1Component,
    Cannabinoid2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
