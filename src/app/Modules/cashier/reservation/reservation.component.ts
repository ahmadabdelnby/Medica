import { Component } from '@angular/core';
import { Ireservation } from '../../../Models/ireservation';
// import { Idepartment } from '../../../Models/idepartment';
// import { ReservationService } from '../../../Services/reservation.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReservationService } from '../../../Services/reservation.service';
import { Router } from '@angular/router';
import { Idepartment } from '../../../Models/idepartment';
import { error } from 'console';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {
  labOrClinic: string = '';
  departments: Idepartment[] = [];

  reservation: Ireservation = {
    username: '',
    nationalId: '',
    clinicOrLab: '', // 'clinic' or 'lab'
    specialty: '' // Only required if clinic is selected
  };
  specialties: string[] =[];
  constructor(private reservationservice: ReservationService,
              private _snackbar: MatSnackBar,
              private router : Router
  ) { 
    // this.reservationservice.getSpecialties().subscribe(specialties => {
    //   this.specialties = specialties;
    // });
  }

  getAllDepartments(){
    this.reservationservice.getAllDepartments().subscribe(
      departments => {
        this.departments = departments;
      }
      ,error => {
        console.error('Failed to fetch departments:', error);
      }
    )
  }

  saveReservation(): void {
    
    const observer={
      next : (usrReservation:Ireservation)=>{
        this._snackbar.open(
          'Reservation Added Successfully' , 'Done' ,{
            duration:3000,
          }
        ),
        this.router.navigateByUrl('/WaitingList')
      },
      error: (err:Error)=>{
        console.log(err.message);
        this._snackbar.open(
          'Reservation Field' , 'Done' ,{
            duration:3000,
          }
        )
      }
      

      }

    this.reservationservice.newReservation(this.reservation).subscribe(observer)
  }

}
