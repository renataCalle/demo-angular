import { Component, OnInit } from '@angular/core';
import { RESULTS } from '../mock-data';
import { Result } from '../result';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  results = RESULTS;
  selectedResult?: Result;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(result: Result): void {
    this.selectedResult = result;
  }

}
