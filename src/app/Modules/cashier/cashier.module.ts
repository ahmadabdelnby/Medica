import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './reservation/reservation.component';
import { WaitingListComponent } from './waiting-list/waiting-list.component';
import { CashierSystemComponent } from './cashier-system/cashier-system.component';
import { ClinicWatingListComponent } from './clinic-wating-list/clinic-wating-list.component';
import { LabWatingListComponent } from './lab-wating-list/lab-wating-list.component';



@NgModule({
  declarations: [
    ReservationComponent,
    WaitingListComponent,
    CashierSystemComponent,
    ClinicWatingListComponent,
    LabWatingListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReservationComponent,
    WaitingListComponent,
    CashierSystemComponent,
    ClinicWatingListComponent,
    LabWatingListComponent
  ]
})
export class CashierModule { }
