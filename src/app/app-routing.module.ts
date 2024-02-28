import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Modules/authentication/login/login.component';
import { RegisterComponent } from './Modules/authentication/register/register.component';
import { HomeComponent } from './Shared-Components/home/home.component';
import { CashierSystemComponent } from './Modules/cashier/cashier-system/cashier-system.component';
import { ReservationComponent } from './Modules/cashier/reservation/reservation.component';
import { WaitingListComponent } from './Modules/cashier/waiting-list/waiting-list.component';

const routes: Routes = [
  {path: 'Login' , component:LoginComponent},
  {path: 'Register' , component:RegisterComponent},
  {path: 'Home' , component:HomeComponent},
  {path: 'Cashier' ,component:CashierSystemComponent},
  {path: 'Reservation' ,component:ReservationComponent},
  {path: 'WaitingList',component:WaitingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
