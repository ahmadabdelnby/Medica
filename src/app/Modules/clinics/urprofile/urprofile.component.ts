import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../../Services/User Data Service/user-data.service';
import { UserBasicData } from '../../../Models/user-basic-data';
import { Observable } from 'rxjs';
import { response } from 'express';
import { AllDiseaseOfUser } from '../../../Models/all-disease-of-user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDiseaseServiceService } from '../../../Services/User Disease Service/user-disease-service.service';
import { Disease } from '../../../Models/disease';
import { AddUserDisease } from '../../../Models/add-user-disease';
import { Router , ActivatedRoute } from '@angular/router';
import { UserDataById } from '../../../Models/user-data-by-id';

@Component({
  selector: 'app-urprofile',
  templateUrl: './urprofile.component.html',
  styleUrl: './urprofile.component.css',
})
export class UrprofileComponent implements OnInit{
  newUserDisease: AddUserDisease = {
    type: '',
    valueResult: '',
    Description: '',
    height: '',
    weight: '',
    userId: '',
    DiseaseId: '',
    Diagnosis: '',
    DiagnosisDate: '',
    photo: ''
  }
  newDisease: Disease[] =[] ;
  selectedDisease: any;
  formData! : FormGroup;
  patientData : UserDataById = {
    id: '',
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    phone: undefined,
    nid: '',
    birthDate: '',
    gender: '',
    isRegister: false,
    bloodType: undefined,
    maritalStatus: undefined,
    roles: []
  } ;

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
    height: '',
    weight: '',
    diseaseName: '',
    diseaseDescription: '',
    diseaseSymptoms: '',
    diseaseCauses: '',
    diagnosis: '',
    diagnosisDate: '',
    docViewUrl: []
    }

  constructor(private userDataService: UserDataService ,
              private userDiseaseService: UserDiseaseServiceService ,
              private _snackBar: MatSnackBar ,
              private fb: FormBuilder ,
              private router: Router ,
              private activatedRoute: ActivatedRoute
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
    });
  }
  ngOnInit(): void {
    this.userDataService.getUserBasicData().subscribe(
      data => {
        this.userData = data.data;
        console.log('User Data: ', data.data);
      }
    );
    
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.userDataService.getUserById(id).subscribe(data => {
        this.patientData = data.data;
      }
      );
      console.log('User Data: ', this.patientData);
    });

    this.userDiseaseService.getAllDisease().subscribe(response => {
      this.newDisease = response.data.map((data: any) => ({
        id: data.id,
        name: data.name,
        description: data.description,
        symptoms: data.symptoms,
        causes: data.causes,
      }));
      console.log('Diseases: ', this.newDisease);
    });
  }

  addUserDiseaseToProfile() {
    this.newUserDisease = this.formData.value;
      const observer = {
        next: (response: any) => {
          this._snackBar.open('Disease Added Successfully', 'Done', {
            duration: 3000,
          });
        },
        error: (err: any) => {
          console.log('this is the error ', err);
          const errorMessage = err.error.message || 'An error occurred';
          this._snackBar.open(`Disease Added Successfully : ${errorMessage}`, 'Close', {
            duration: 5000,
          });
        },
      };
      this.userDiseaseService.addUserDisease(this.newUserDisease).subscribe(observer);
  }
}
