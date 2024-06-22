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
import { UrprofileComponent } from './Modules/clinics/urprofile/urprofile.component';
import { DoctorReservationComponent } from './Modules/clinics/doctor-reservation/doctor-reservation.component';
import { LabUrprofileComponent } from './Modules/cashier/lab-urprofile/lab-urprofile.component';
import { MedicineComponent } from './Modules/pharmacy/medicine/medicine.component';
import { MedicineDetailsComponent } from './Modules/pharmacy/medicine-details/medicine-details.component';
import { AddMedicineComponent } from './Modules/pharmacy/add-medicine/add-medicine.component';
import { patientGuard } from './Guards/patient.guard';
import { FirstaidComponent } from './Modules/more/firstaid/firstaid.component';
import { AboutusComponent } from './Modules/more/aboutus/aboutus.component';
import { ContactusComponent } from './Modules/more/contactus/contactus.component';
import { AllLabsComponent } from './Modules/labs/all-labs/all-labs.component';
import { LabReservationsComponent } from './Modules/labs/lab-reservations/lab-reservations.component';
import { PredictionComponent } from './Modules/aimodel/prediction/prediction.component';
import { PheumoniaComponent } from './Modules/aimodel/pheumonia/pheumonia.component';

// import { UserRole } from './Models/user';
// UserRole;

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent},
  { path: 'Home', component: HomeComponent },
  { path: 'WaitingList', component: WaitingListComponent },
  {
    path: 'ClinicWaitingList',
    component: ClinicWaitingListComponent,
  },
  { path: 'LabWAitingList', component: LabWaitingListComponent },
  { path: 'laburprofile', component: LabUrprofileComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'resetpassword', component: ResetPasswordComponent },
  { path: 'otp', component: OTPComponent },
  { path: 'newpassword', component: NewPasswordComponent },
  {
    path: 'Cashier',
    component: CashierSystemComponent,
    // canActivate: [AuthGuard],
    // data: { roles: [UserRole.Cashier] },
  },
  {
    path: 'Reservation',
    component: ReservationComponent,
    // canActivate: [AuthGuard],
    // data: { roles: [UserRole.Cashier] },
  },
  {
    path: 'cliniclogin',
    component: ClinicloginComponent,
    // canActivate: [AuthGuard],
    // data: { roles: [UserRole.Doctor] },
  },

  { path: 'urprofile', component: UrprofileComponent },
  { path: 'doctorreservation/:id', component: DoctorReservationComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'medicine', component: MedicineComponent },
  { path: 'addmedicine', component: AddMedicineComponent },
  { path: 'medicinedetails', component: MedicineDetailsComponent },
  {path:'firstaid', component:FirstaidComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path : 'Labs' , component: AllLabsComponent },
  {path : 'labreservation/:id' , component: LabReservationsComponent},
  {path: 'prediction' , component: PredictionComponent},
  {path: 'pheumonia' , component:PheumoniaComponent},
  { path: '**', component: NotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
