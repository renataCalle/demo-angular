import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demographics',
  templateUrl: './demographics.component.html',
  styleUrls: ['./demographics.component.css']
})
export class DemographicsComponent implements OnInit {
  @Input() startingForm: FormGroup | undefined;
  @Output() subformInitialized: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() changeStep: EventEmitter<boolean> = new EventEmitter<boolean>();
  public personalInfoForm: FormGroup | undefined;
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    if (this.startingForm) {
      this.personalInfoForm = this.startingForm;
    } 
    else {
      this.personalInfoForm = this._fb.group({
        firstName: '',
        lastName: '',
        // ... continue with the other fields
      })
    }
    this.subformInitialized.emit(this.personalInfoForm);
  }
  doChangeStep(direction: 'forward') {
    this.changeStep.emit(direction);
  }

}
