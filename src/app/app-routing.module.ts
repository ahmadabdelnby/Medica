import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Modules/authentication/login/login.component';
import { RegisterComponent } from './Modules/authentication/register/register.component';
import { HomeComponent } from './Shared-Components/home/home.component';
import { CashierSystemComponent } from './Modules/cashier/cashier-system/cashier-system.component';
import { ReservationComponent } from './Modules/cashier/reservation/reservation.component';
import { WaitingListComponent } from './Modules/cashier/waiting-list/waiting-list.component';
import { LabWatingListComponent } from './Modules/cashier/lab-wating-list/lab-wating-list.component';
import { ClinicWatingListComponent } from './Modules/cashier/clinic-wating-list/clinic-wating-list.component';
import { ClinicloginComponent } from './Modules/clinics/cliniclogin/cliniclogin.component';
import { ReportComponent } from './Modules/clinics/report/report.component';
import { UrprofileComponent } from './Modules/clinics/urprofile/urprofile.component';
import { DoctorReservationComponent } from './Modules/clinics/doctor-reservation/doctor-reservation.component';

const routes: Routes = [
  {path: 'Login' , component:LoginComponent},
  {path: 'Register' , component:RegisterComponent},
  {path: 'Home' , component:HomeComponent},
  {path: 'Cashier' ,component:CashierSystemComponent},
  {path: 'Reservation' ,component:ReservationComponent},
  {path: 'WaitingList',component:WaitingListComponent },
  {path: 'LabWaitingList',component:LabWatingListComponent},
  {path:'ClinicWaitingList', component:ClinicWatingListComponent},
  {path: 'cliniclogin' , component:ClinicloginComponent},
  {path: 'report' , component:ReportComponent},
  {path: 'urprofile', component:UrprofileComponent},
  {path: 'doctorreservation', component:DoctorReservationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
