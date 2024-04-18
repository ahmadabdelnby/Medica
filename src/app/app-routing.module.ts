import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Modules/authentication/login/login.component';
import { ResetPasswordComponent } from './Modules/authentication/reset-password/reset-password.component';
import { RegisterComponent } from './Modules/authentication/register/register.component';
import { OTPComponent } from './Modules/authentication/otp/otp.component';
import { NewPasswordComponent } from './Modules/authentication/new-password/new-password.component';
import { HomeComponent } from './Shared-Components/home/home.component';
import { CashierSystemComponent } from './Modules/cashier/cashier-system/cashier-system.component';
import { ReservationComponent } from './Modules/cashier/reservation/reservation.component';
import { WaitingListComponent } from './Modules/cashier/waiting-list/waiting-list.component';
import { ClinicWaitingListComponent } from './Modules/cashier/clinic-waiting-list/clinic-waiting-list.component';
import { NotFoundComponent } from './Shared-Components/not-found/not-found.component';
import { LabWaitingListComponent } from './Modules/cashier/lab-waiting-list/lab-waiting-list.component';
import { ClinicloginComponent } from './Modules/clinics/cliniclogin/cliniclogin.component';
import { ReportComponent } from './Modules/clinics/report/report.component';
import { UrprofileComponent } from './Modules/clinics/urprofile/urprofile.component';
import { DoctorReservationComponent } from './Modules/clinics/doctor-reservation/doctor-reservation.component';
import { LabUrprofileComponent } from './Modules/cashier/lab-urprofile/lab-urprofile.component';
import { MedicineComponent } from './Modules/pharmacy/medicine/medicine.component';
import { MedicineDetailsComponent } from './Modules/pharmacy/medicine-details/medicine-details.component';
import { AddMedicineComponent } from './Modules/pharmacy/add-medicine/add-medicine.component';




const routes: Routes = [
  {path:'', redirectTo:'/Home' , pathMatch:'full'},
  {path:'Home' , component:HomeComponent},
  {path:'WaitingList' , component:WaitingListComponent},
  {path:'ClinicWaitingList' , component:ClinicWaitingListComponent},
  {path:'LabWAitingList' , component:LabWaitingListComponent} ,
  {path : 'laburprofile', component:LabUrprofileComponent },
  {path:'Register', component:RegisterComponent},
  {path:'Login' , component:LoginComponent},
  {path: 'resetpassword' , component:ResetPasswordComponent},
  {path:'otp' , component:OTPComponent},
  {path:'newpassword', component:NewPasswordComponent},
  {path:'Cashier' , component:CashierSystemComponent},
  {path:'Reservation', component:ReservationComponent},
  {path: 'cliniclogin' , component:ClinicloginComponent},
  {path: 'report' , component:ReportComponent},
  {path: 'urprofile', component:UrprofileComponent},
  {path: 'doctorreservation', component:DoctorReservationComponent },
  {path:'Login' , component:LoginComponent},
  {path:'medicine',component:MedicineComponent},
  {path:'medicinedetails',component:MedicineDetailsComponent},
  {path:'addmedicine',component:AddMedicineComponent},
  {path:'**' , component:NotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
