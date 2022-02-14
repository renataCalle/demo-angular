import { Component, OnInit } from '@angular/core';
import { Cannabinoid } from '../models/cannabinoid';
import { FormDataService } from '../services/form-data.service';

@Component({
  selector: 'app-cannabinoid1',
  templateUrl: './cannabinoid1.component.html',
  styleUrls: ['./cannabinoid1.component.css']
})
export class Cannabinoid1Component implements OnInit {

  cannabinoid : Cannabinoid;

  constructor(private formDataService : FormDataService) {
    this.cannabinoid = FormDataService.cannabinoid;
   }

  ngOnInit(): void {
  }

}
