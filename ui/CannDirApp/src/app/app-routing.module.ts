import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cannabinoid1Component } from './cannabinoid1/cannabinoid1.component';
import { Cannabinoid2Component } from './cannabinoid2/cannabinoid2.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path : '',   component : Cannabinoid1Component }, 
  { path : 'addressdetails',   component : Cannabinoid2Component }, ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }