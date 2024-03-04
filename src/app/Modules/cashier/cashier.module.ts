import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './reservation/reservation.component';
import { WaitingListComponent } from './waiting-list/waiting-list.component';
import { CashierSystemComponent } from './cashier-system/cashier-system.component';
import { LabWaitingListComponent } from './lab-waiting-list/lab-waiting-list.component';
import { ClinicWaitingListComponent } from './clinic-waiting-list/clinic-waiting-list.component';



@NgModule({
  declarations: [
    ReservationComponent,
    WaitingListComponent,
    CashierSystemComponent,
    LabWaitingListComponent,
    ClinicWaitingListComponent
  ],
  imports: [
    CommonModule
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
