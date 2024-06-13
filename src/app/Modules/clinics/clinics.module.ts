import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicloginComponent } from './cliniclogin/cliniclogin.component';
import { UrprofileComponent } from './urprofile/urprofile.component';
import { DoctorReservationComponent } from './doctor-reservation/doctor-reservation.component';

@NgModule({
  declarations: [
    ClinicloginComponent,
    UrprofileComponent,
    DoctorReservationComponent,
  ],
  imports: [CommonModule],
})
export class ClinicsModule {}
