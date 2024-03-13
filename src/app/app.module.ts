import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './Modules/authentication/authentication.module';
import { HeaderComponent } from './Shared-Components/header/header.component';
import { FooterComponent } from './Shared-Components/footer/footer.component';
import { HomeComponent } from './Shared-Components/home/home.component';
import { ProfileModule } from './Modules/profile/profile.module';
import { CashierModule } from './Modules/cashier/cashier.module';
import { ClinicsModule } from './Modules/clinics/clinics.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    ProfileModule,
    CashierModule,
    ClinicsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
