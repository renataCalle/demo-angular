import { Injectable } from '@angular/core';
import { Cannabinoid } from '../models/cannabinoid';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
    Cannabinoid1: Cannabinoid;
    Cannabinoid2: Cannabinoid;
  static cannabinoid1Component: import("c:/dev/cann_dir_angular/ui/CannDirApp/src/app/cannabinoid1/cannabinoid1.component").Cannabinoid1Component;
  static cannabinoid: Cannabinoid;

  constructor() {
    this.Cannabinoid1 = new Cannabinoid();
    this.Cannabinoid2 = new Cannabinoid();
   }
}
