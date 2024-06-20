import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PredictionComponent } from './prediction/prediction.component';

@NgModule({
  declarations: [PredictionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AimodelModule { }

