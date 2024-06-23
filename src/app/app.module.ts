import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './Modules/authentication/authentication.module';
import { HeaderComponent } from './Shared-Components/header/header.component';
import { FooterComponent } from './Shared-Components/footer/footer.component';
import { HomeComponent } from './Shared-Components/home/home.component';
import { ProfileModule } from './Modules/profile/profile.module';
import { CashierModule } from './Modules/cashier/cashier.module';
// import { ClinicsModule } from './Modules/clinics/clinics.module';
import { NotFoundComponent } from './Shared-Components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PharmacyModule } from './Modules/pharmacy/pharmacy.module';
import { MoreModule } from './Modules/more/more.module';
import { AimodelModule } from './Modules/aimodel/aimodel.module';
import { LabsModule } from './Modules/labs/labs.module';
import { ClinicsModule } from './Modules/clinics/clinics.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    ProfileModule,
    CashierModule,
    // ClinicsModule,
    PharmacyModule,
    MoreModule,
    AimodelModule,
    HttpClientModule,
    MatSnackBarModule,
    LabsModule,
    ClinicsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
