import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../../Services/User Data Service/user-data.service';
import { UserBasicData } from '../../../Models/user-basic-data';
import { Observable } from 'rxjs';
import { response } from 'express';
import { AllDiseaseOfUser } from '../../../Models/all-disease-of-user';
// import { UserDiseaseService } from '../../../Services/User Disease/user-disease.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-urprofile',
  templateUrl: './urprofile.component.html',
  styleUrl: './urprofile.component.css',
})
export class UrprofileComponent implements OnInit{
  formData! : FormGroup;
  userData: UserBasicData = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: undefined,
    nid: '',
    bloodType: undefined,
    age: 0,
    report: undefined
  }

  userDisease: AllDiseaseOfUser = {
    firstName: '',
    lastName: '',
    maritalStatus: undefined ,
    gender: '',
    type: '',
    valueResult: 0,
    description: '',
    height: 0,
    weight: 0,
    diseaseName: '',
    diseaseDescription: '',
    diseaseSymptoms: '',
    diseaseCauses: '',
    diagnosis: '',
    diagnosisDate: '',
    docViewUrl: []
    }

  constructor(private userDataService: UserDataService ,
              // private userDiseaseService: UserDiseaseService ,
              private _snackBar: MatSnackBar ,
              private fb: FormBuilder
  ) { 
    this.formData = this.fb.group({
      type: ['', Validators.required],
      valueResult: ['', Validators.required],
      Description: ['', Validators.required],
      height: ['', Validators.required],
      weight: ['', Validators.required],
      userId: ['', Validators.required],
      DiseaseId: ['', Validators.required],
      Diagnosis: ['', Validators.required],
      DiagnosisDate: ['', Validators.required],
      photo: ['']
    });
  }
  ngOnInit(): void {
    // this.userDataService.getUserBasicData().subscribe(
    //   data => {
    //     this.userData = data.data;
    //     console.log('User Data: ', data.data);
    //   }
    // )

    // this.userDataService.GetAllDiseaseOfUser().subscribe(
    //   data => {
    //     this.userDisease = data.data;
    //     console.log('User Disease: ', data.data);
    //   }
    // )

  }

  // addUserDiseaseToProfile() {
  //   if (this.formData.valid) {
  //     this.userDiseaseService.addUserDisease(this.formData.value).subscribe(
  //       response => {
  //         console.log(response);
  //         this._snackBar.open('Operation completed successfully', 'Close', {
  //           duration: 4000,
  //         });
  //       },
  //       error => {
  //         console.error(error);
  //         console.log(response)
  //         this._snackBar.open('Operation failed', 'Close', {
  //           duration: 4000,
  //         });
  //       }
  //     );
  //   }
  // }
}
