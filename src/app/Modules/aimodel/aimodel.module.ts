import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PredictionComponent } from './prediction/prediction.component';
import { PheumoniaComponent } from './pheumonia/pheumonia.component';


@NgModule({
  declarations: [PredictionComponent, PheumoniaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AimodelModule { }

