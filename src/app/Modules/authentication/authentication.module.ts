import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ErrorHandlingComponent
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
