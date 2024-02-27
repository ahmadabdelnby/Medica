import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './reservation/reservation.component';
import { WaitingListComponent } from './waiting-list/waiting-list.component';



@NgModule({
  declarations: [
    ReservationComponent,
    WaitingListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CashierModule { }
