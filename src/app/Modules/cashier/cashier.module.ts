import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './reservation/reservation.component';
import { WaitingListComponent } from './waiting-list/waiting-list.component';
import { CashierSystemComponent } from './cashier-system/cashier-system.component';



@NgModule({
  declarations: [
    ReservationComponent,
    WaitingListComponent,
    CashierSystemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReservationComponent,
    WaitingListComponent,
    CashierSystemComponent
  ]
})
export class CashierModule { }
