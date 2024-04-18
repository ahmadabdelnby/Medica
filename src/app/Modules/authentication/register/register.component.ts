import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../../../Services/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar'
import { User } from '../../../Models/user';
// import { error } from 'console';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  user: User = {
    nid: '',
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    password: '',
    confirmPassword: ''

  };

  registrationForm!: FormGroup;

  // noSpacesValidator(): ValidatorFn {
  //   return (control: AbstractControl): { [key: string]: any } | null => {
  //     const hasSpaces = (control.value || '').trim().indexOf(' ') !== -1;
  //     return hasSpaces ? { 'noSpaces': true } : null;
  //   };
  // }

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const password = control.value || '';
      const hasLetter = /[a-zA-Z]/.test(password);
      const hasNumber = /\d/.test(password);
      const hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
      const valid = hasLetter && hasNumber && hasSpecialCharacter;
      return valid ? null : { 'invalidPassword': true };
    };
  }

  confirmPasswordValidator(passwordControlName: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const password = control.root.get(passwordControlName)?.value;
      const confirmPassword = control.value;
      return password === confirmPassword ? null : { 'passwordMismatch': true };
    };
  }

  constructor(private authService: AuthenticationService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private formBuilder: FormBuilder,
    // private registrationForm: FormGroup
    // private loginSubscription :Subscription
  ) { }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.registrationForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern(/^\S*$/)]],
      email: ['', [Validators.required, Validators.email]],
      nid: ['', [Validators.required, Validators.pattern(/^\d{14}$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/)]],
      confirmPassword: ['', [Validators.required, this.confirmPasswordValidator('password')]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }



  submitForm() {
    this.user = this.registrationForm.value;
    const observer = {
      next: (userReg: User) => {
      this._snackBar.open(
        'Registration Complete', 'Done', {
        duration: 3000,
      }
      ),
        this.router.navigateByUrl('/Home')
      },
      error: (err: any) => {
        console.log('this is the error ', err);
        let errorMessage = '';
        for (const key in err.error.errors) {
          if (err.error.errors.hasOwnProperty(key)) {
            errorMessage += `${key}: ${err.error.errors[key]}\n`;
          }
        }
        this._snackBar.open(errorMessage, 'Done', {
          duration: 5000,
        });
      }
    };
    if(this.registrationForm.valid){
      this.authService.Register(this.user).subscribe(observer)
    } else{
      this._snackBar.open('Please check the form fields', 'Close', { duration: 3000 });
    }
    // this.authService.Register(this.user).subscribe(observer)
  }

}
