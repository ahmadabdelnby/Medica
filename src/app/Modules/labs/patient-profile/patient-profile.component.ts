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

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrl: './patient-profile.component.css'
})
export class PatientProfileComponent {
  constructor(
    private userDataService: UserDataService,
    private userDiseaseService: UserDiseaseServiceService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {}
  
}
