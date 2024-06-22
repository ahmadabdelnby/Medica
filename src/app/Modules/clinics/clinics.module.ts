import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicloginComponent } from './cliniclogin/cliniclogin.component';
import { UrprofileComponent } from './urprofile/urprofile.component';
import { DoctorReservationComponent } from './doctor-reservation/doctor-reservation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClinicloginComponent,
    UrprofileComponent,
    DoctorReservationComponent,
  ],
  imports: [CommonModule ,
         FormsModule ,
         ReactiveFormsModule
  ],
})
export class ClinicsModule {}
