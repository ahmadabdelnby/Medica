import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { OTPComponent } from './otp/otp.component';
import { NewPasswordComponent } from './new-password/new-password.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ErrorHandlingComponent,
    OTPComponent,
    NewPasswordComponent
  ],
  imports: [
    CommonModule ,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    ErrorHandlingComponent,
    ResetPasswordComponent
  ],
  providers:[
  
  ]
})
export class AuthenticationModule { }
