import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllLabsComponent } from './all-labs/all-labs.component';
import { LabReservationsComponent } from './lab-reservations/lab-reservations.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AllLabsComponent,
    LabReservationsComponent,
    PatientProfileComponent
  ],
  imports: [
    CommonModule ,
         FormsModule ,
         ReactiveFormsModule
  ],
  exports: [
    AllLabsComponent,
    LabReservationsComponent,
    PatientProfileComponent
  ]
})
export class LabsModule { }
