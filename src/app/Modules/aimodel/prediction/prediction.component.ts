import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {
  diabetesForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.diabetesForm = this.fb.group({
      pregnancies: ['', Validators.required],
      skinThickness: ['', Validators.required],
      diabetesPedigreeFunction: ['', Validators.required],
      glucose: ['', Validators.required],
      insulin: ['', Validators.required],
      age: ['', Validators.required],
      bloodPressure: ['', Validators.required],
      bmi: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.diabetesForm.valid) {
      console.log('Form Submitted', this.diabetesForm.value);
    }
  }
}
