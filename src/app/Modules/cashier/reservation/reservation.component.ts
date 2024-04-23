import { Component, OnInit } from '@angular/core';
import { Ireservation } from '../../../Models/ireservation';
// import { Idepartment } from '../../../Models/idepartment';
// import { ReservationService } from '../../../Services/reservation.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReservationService } from '../../../Services/Reservation Service/reservation.service';
import { Router } from '@angular/router';
import { Idepartment } from '../../../Models/idepartment';
import { error } from 'console';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css',
})
export class ReservationComponent implements OnInit {
  labOrClinic: string = '';
  departments: Idepartment[] = [];

  reservation: Ireservation = {
    username: '',
    nationalId: '',
    clinicOrLab: '', // 'clinic' or 'lab'
    specialty: '', // Only required if clinic is selected
  };
  specialties: string[] = [];
  constructor(
    private reservationservice: ReservationService,
    private _snackbar: MatSnackBar,
    private router: Router
  ) {
    // this.reservationservice.getSpecialties().subscribe(specialties => {
    //   this.specialties = specialties;
    // });
  }
  ngOnInit(): void {
    this.reservationservice.getAllDepartments().subscribe(response => {
      this.departments = response.data.map((data: any) => ({
        id: data.id,
        name: data.name,
        hospitalID: data.hospitalID,
      }));
      console.log('Departments: ', this.departments);
    });
  }
  getAllDepartments() {
    const observer = {
      next: (departments: Idepartment[]) => {
        this.departments = departments;
        console.log('Departments:', this.departments);
      },
      error: (err: Error) => {
        console.log(err.message);
        this._snackbar.open('Registration Field', 'Done', {
          duration: 3000,
        });
      },
    };
    this.reservationservice.getAllDepartments().subscribe(
      // (response) => {
      //   this.departments = response;
      //   console.log('Departments:', this.departments);
      // }
      // ,error => {
      //   console.error('Error fetching departments:', error);
      //   this._snackbar.open('Failed to fetch departments', 'Close', {
      //     duration: 3000
      //   });      }
      observer
    );
  }

  saveReservation(): void {
    const observer = {
      next: (usrReservation: Ireservation) => {
        this._snackbar.open('Reservation Added Successfully', 'Done', {
          duration: 3000,
        }),
          this.router.navigateByUrl('/WaitingList');
      },
      error: (err: Error) => {
        console.log(err.message);
        this._snackbar.open('Reservation Field', 'Done', {
          duration: 3000,
        });
      },
    };

    this.reservationservice
      .newReservation(this.reservation)
      .subscribe(observer);
  }
}
