import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
type Step = 'demographics' | 'loginInfo';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css']
})

// Multi-step form
export class FormContainerComponent implements OnInit {
  private currentStepBs: BehaviorSubject<Step> = new BehaviorSubject<Step>('demographics');
  public currentStep$: Observable<Step> = this.currentStepBs.asObservable();
  public userForm!: FormGroup; // not sure about this line
  constructor(private _fb: FormBuilder) {}
  ngOnInit() {
    this.userForm = this._fb.group({
      demographics: null,
      loginInfo: null
    });
  }
subformInitialized(name: string, group: FormGroup) {
    this.userForm.setControl(name, group);
  }
changeStep(currentStep: string, direction: 'forward' | 'back') {
    switch(currentStep) {
      case 'demographicsStep':
        if (direction === 'forward') {
          this.currentStepBs.next('loginInfo');
        }
        break;
      case 'loginInfoStep':
        if (direction === 'back') {
          this.currentStepBs.next('demographics');
        }
        break;
    }
  }
submitForm() {
      const formValues = this.userForm.value;
      // submit the form with a service
  }
}