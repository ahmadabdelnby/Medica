import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './reservation/reservation.component';
import { WaitingListComponent } from './waiting-list/waiting-list.component';
import { CashierSystemComponent } from './cashier-system/cashier-system.component';
import { LabWaitingListComponent } from './lab-waiting-list/lab-waiting-list.component';
import { ClinicWaitingListComponent } from './clinic-waiting-list/clinic-waiting-list.component';
import { FormsModule } from '@angular/forms';
import { LabUrprofileComponent } from './lab-urprofile/lab-urprofile.component';



@NgModule({
  declarations: [
    ReservationComponent,
    WaitingListComponent,
    CashierSystemComponent,
    LabWaitingListComponent,
    ClinicWaitingListComponent,
    LabUrprofileComponent
  ],
  imports: [
    CommonModule,
    FormsModule    
  ],
  exports: [
    ReservationComponent,
    WaitingListComponent,
    CashierSystemComponent,
    ClinicWaitingListComponent,
    LabWaitingListComponent
  ]
})
export class CashierModule { }
